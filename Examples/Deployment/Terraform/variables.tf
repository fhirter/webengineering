variable "service_name" {
  type = string
}
variable "domain" {
  type = string
}

# Google
variable "credentials" {
  type      = string
  sensitive = true
}
variable "gcp_project_id" {
  type = string
}
variable "gcp_region" {
  type = string
}
variable "gcp_zone" {
  type = string
}

# Cloudflare
variable "cloudflare_api_token" {
  type      = string
  sensitive = true
}
variable "cloudflare_zone_id" {
  type = string
}

variable "cloudflare_account_id" {
  type = string
}

variable "environment" {
  type = string
}
variable "backend_archive" {
  type = string
}
variable "backend_storage_bucket_name" {
  type = string
}
variable "backend_function_name" {
  type = string
}
variable "frontend_storage_bucket_name" {
  type = string
}