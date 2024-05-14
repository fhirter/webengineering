locals {
  frontend_dir         = "frontend"
  service_name         = var.service_name
  function_entry_point = "main"
  service_description  = "Persisting Backend for Racoon Frontend App"
}

# Providers
terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "5.0.0"
    }
    google-beta = {
      source  = "hashicorp/google-beta"
      version = "5.0.0"
    }
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.15"
    }
  }
  backend "http" {}
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

provider "google" {
  credentials = var.credentials
  project     = var.gcp_project_id
  region      = var.gcp_region
  zone        = var.gcp_zone
}

provider "google-beta" {
  credentials = var.credentials
  project     = var.gcp_project_id
  region      = var.gcp_region
  zone        = var.gcp_zone
}

# Service Accounts and Roles
resource "google_service_account" "function_sa" {
  account_id   = "${local.service_name}-cloud-function"
  display_name = "Cloud Function Service Account"
  description  = "Cloud Function Service Account"
}

resource "google_service_account" "api_gateway_sa" {
  account_id   = "${local.service_name}-api-gateway"
  display_name = "API Gateway Service Account"
  description  = "API Gateway Service Account"
}

resource "google_project_iam_member" "api_gateway_cloud_function_invoker" {
  member  = "serviceAccount:${google_service_account.api_gateway_sa.email}"
  project = var.gcp_project_id
  role    = "roles/cloudfunctions.invoker"
}
resource "google_project_iam_member" "api_gateway_run_invoker" {
  member  = "serviceAccount:${google_service_account.api_gateway_sa.email}"
  project = var.gcp_project_id
  role    = "roles/run.invoker"
}

# Frontend
resource "google_storage_bucket" "frontend_bucket" {
  name                        = var.frontend_storage_bucket_name
  location                    = var.gcp_region
  uniform_bucket_level_access = true
  force_destroy               = true
  website {
    main_page_suffix = "index.html"
  }
  cors {
    origin          = ["https://${google_api_gateway_gateway.gateway.default_hostname}"]
    method          = ["GET", "POST"]
    response_header = ["*"]
    max_age_seconds = 3600
  }
}

resource "google_storage_bucket_iam_member" "frontend_iam" {
  bucket = google_storage_bucket.frontend_bucket.name
  member = "allUsers"
  role   = "roles/storage.objectViewer"
}

# Event Persisting Backend
resource "google_storage_bucket" "backend" {
  name                        = var.backend_storage_bucket_name
  location                    = var.gcp_region
  uniform_bucket_level_access = true
  public_access_prevention    = "enforced"
}

resource "google_storage_bucket_object" "backend" {
  name   = var.backend_archive
  source = var.backend_archive
  bucket = google_storage_bucket.backend.name
}

## secrets
resource "google_secret_manager_secret" "db_connection_string" {
  secret_id = "db_connection_string"

  replication {
    user_managed {
      replicas {
        location = var.gcp_region
      }
    }
  }
}

resource "google_secret_manager_secret_version" "db_connection_string" {
  secret = google_secret_manager_secret.db_connection_string.name

  secret_data = "secret"
  enabled     = true
}

resource "google_secret_manager_secret_iam_binding" "function_sa_secret_binding" {
  project   = var.gcp_project_id
  secret_id = google_secret_manager_secret.db_connection_string.secret_id
  role      = "roles/secretmanager.secretAccessor"
  members   = [
    "serviceAccount:${google_service_account.function_sa.email}",
  ]
}

resource "google_cloudfunctions2_function" "backend" {
  name        = var.backend_function_name
  location    = var.gcp_region
  description = local.service_description

  build_config {
    runtime     = "nodejs20"
    entry_point = local.function_entry_point
    source {
      storage_source {
        bucket = google_storage_bucket.backend.name
        object = google_storage_bucket_object.backend.name
      }
    }
  }

  service_config {
    max_instance_count    = 1
    available_memory      = "256M"
    timeout_seconds       = 60
    ingress_settings      = "ALLOW_ALL"
    service_account_email = google_service_account.function_sa.email
    environment_variables = {
      ENVIRONMENT = var.environment
    }
    secret_environment_variables {
      key        = "PG_CONNECTION_STRING"
      project_id = var.gcp_project_id
      secret     = google_secret_manager_secret.db_connection_string.secret_id
      version    = "latest"
    }
  }
  depends_on = [google_secret_manager_secret_version.db_connection_string, google_secret_manager_secret_version.ably_key]
}

# API Gateway
resource "google_api_gateway_api" "api_gateway" {
  provider = google-beta
  api_id   = local.service_name
}

resource "google_api_gateway_api_config" "api_config" {
  provider             = google-beta
  api                  = google_api_gateway_api.api_gateway.api_id
  api_config_id_prefix = "${local.service_name}-api-config"
  display_name         = "${local.service_name} API Gateway"
  depends_on           = [google_cloudfunctions2_function.backend]

  gateway_config {
    backend_config {
      google_service_account = google_service_account.api_gateway_sa.id
    }
  }

  openapi_documents {
    document {
      path     = "testApi.yaml"
      contents = filebase64("testApi.yaml")
    }
  }
  lifecycle {
    create_before_destroy = true
  }
}

resource "google_api_gateway_gateway" "gateway" {
  provider   = google-beta
  api_config = google_api_gateway_api_config.api_config.id
  gateway_id = local.service_name
}

resource "random_id" "default" {
  byte_length = 8
}

# Load Balancer
resource "random_id" "certificate" {
  byte_length = 4
  prefix      = "ssl-cert"

  keepers = {
    domain = var.domain
  }
}

resource "google_compute_managed_ssl_certificate" "ssl-cert" {
  provider = google-beta
  name     = random_id.certificate.hex

  lifecycle {
    create_before_destroy = false
  }

  managed {
    domains = [var.domain]
  }
}

# Reserve IP address
resource "google_compute_global_address" "global-address" {
  ip_version = "IPV4"
  name       = "${var.service_name}-ip-address"
}

resource "google_compute_backend_bucket" "frontend_bucket" {
  name        = "frontend"
  description = "Contains Static Frontend Assets"
  bucket_name = google_storage_bucket.frontend_bucket.name
  lifecycle {
    create_before_destroy = true
  }
}


resource "google_compute_region_network_endpoint_group" "api_gateway_neg" {
  provider              = google-beta
  name                  = "${var.service_name}-neg"
  network_endpoint_type = "SERVERLESS"
  region                = var.gcp_region
  serverless_deployment {
    platform = "apigateway.googleapis.com"
    resource = google_api_gateway_gateway.gateway.gateway_id
  }
}

resource "google_compute_backend_service" "api_backend" {
  name      = "${local.service_name}-api-gateway-backend"
  port_name = "http"
  protocol  = "HTTP"

  backend {
    group = google_compute_region_network_endpoint_group.api_gateway_neg.id
  }
}


# Create url map
resource "google_compute_url_map" "default" {
  name = "${var.service_name}-url-map"

  default_service = google_compute_backend_bucket.frontend_bucket.id

  host_rule {
    hosts        = [var.domain]
    path_matcher = "path-matcher-2"
  }
  path_matcher {
    name            = "path-matcher-2"
    default_service = google_compute_backend_bucket.frontend_bucket.id

    path_rule {
      paths   = ["/api/*"]
      service = google_compute_backend_service.api_backend.id
    }
  }
}

# Create HTTP target proxy
resource "google_compute_target_https_proxy" "default" {
  name             = "https-loadbalancer-proxy"
  url_map          = google_compute_url_map.default.id
  ssl_certificates = [google_compute_managed_ssl_certificate.ssl-cert.id]
}


# Create forwarding rule
resource "google_compute_global_forwarding_rule" "default" {
  name                  = "https-loadbalancer-forwarding-rule"
  ip_protocol           = "TCP"
  load_balancing_scheme = "EXTERNAL"
  port_range            = 443
  target                = google_compute_target_https_proxy.default.id
  ip_address            = google_compute_global_address.global-address.id
}

# DNS
resource "cloudflare_record" "service_cname" {
  zone_id = var.cloudflare_zone_id # This is the ID of the domain you're working with.
  name    = var.service_name   # This is the subdomain part of the CNAME. E.g., 'www' for 'www.example.com'.
  value   = google_compute_global_address.global-address.address
  type    = "A"
  ttl     = 3600
  proxied = false # Set this to 'true' if you want the record to be proxied through Cloudflare.
}

# Outputs
output "load_balancer_ip" {
  value = google_compute_global_address.global-address.address
}

output "gateway_uri" {
  value = google_api_gateway_gateway.gateway.default_hostname
}