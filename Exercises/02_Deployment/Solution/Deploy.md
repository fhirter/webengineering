# Deploy Container

## Prerequisites

1. Install azure CLI: `brew update && brew install azure-cli`
2. Login: `az login`
3. start docker daemon 

## Deploy

Create container registry:

```bash
SERVICE_NAME="webengineering"
IMAGE_NAME=$SERVICE_NAME
RESOURCE_GROUP_NAME="tekoTest"
CONTAINER_REGISTRY_NAME="tekoregistry73783811" # needs to be unique, lowercase, alphanumeric
VERSION="v1"


# create container repository
az group create --name $RESOURCE_GROUP_NAME --location switzerlandnorth
az acr create --resource-group $RESOURCE_GROUP_NAME --name $CONTAINER_REGISTRY_NAME --sku Basic
az acr login --name $CONTAINER_REGISTRY_NAME
ACR_LOGIN_SERVER=$(az acr show --name $CONTAINER_REGISTRY_NAME --query loginServer --output tsv)

# build docker image and push to container repository
# caution: use "docker buildx" if you ar not an amd64 platform (i.e. apple silicone)
#docker build . --tag $IMAGE_NAME
docker buildx build --platform linux/amd64 --tag $IMAGE_NAME .
docker tag $IMAGE_NAME $ACR_LOGIN_SERVER/$IMAGE_NAME:$VERSION
docker push $ACR_LOGIN_SERVER/$IMAGE_NAME:$VERSION

# create service principal
ACR_REGISTRY_ID=$(az acr show --name $CONTAINER_REGISTRY_NAME --query "id" --output tsv)
SERVICE_PRINCIPAL_NAME=$SERVICE_NAME
PASSWORD=$(az ad sp create-for-rbac --name $SERVICE_PRINCIPAL_NAME --scopes $ACR_REGISTRY_ID --role acrpull --query "password" --output tsv)
USER_NAME=$(az ad sp list --display-name $SERVICE_PRINCIPAL_NAME --query "[].appId" --output tsv)

# deploy to container instances
az container create --resource-group $RESOURCE_GROUP_NAME \
  --name $SERVICE_NAME \
  --image $ACR_LOGIN_SERVER/$IMAGE_NAME:$VERSION\
  --cpu 1 \
  --memory 1 \
  --ip-address Public \
  --dns-name-label $SERVICE_NAME \
  --ports 80 \
  --registry-login-server $ACR_LOGIN_SERVER \
  --registry-username $USER_NAME \
  --registry-password $PASSWORD
  
SERVICE_URL=$(az container show --resource-group $RESOURCE_GROUP_NAME --name $SERVICE_NAME --query ipAddress.fqdn --output tsv)

echo "displaying state of service at $SERVICE_URL:"
az container show --resource-group $RESOURCE_GROUP_NAME --name $SERVICE_NAME --query instanceView.state  

echo "displaying the logs:"

az container logs --resource-group $RESOURCE_GROUP_NAME --name $SERVICE_NAME
```

## Clean Up

```bash
echo "deleting resource group $RESOURCE_GROUP_NAME"
az group delete --name $RESOURCE_GROUP_NAME

echo "this should return empty lists:"
az group list
az container list
```
