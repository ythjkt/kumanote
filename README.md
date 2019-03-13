# Kumanote
A web based note taking app.

## Getting Started

### Prerequisit
Have docker installed


## Running The Application Locally with Docker Compose
```
# Run the following command
# Then go to localhost:3050
docker-compose up
```

## Running The Application Locally with Minikube
```
# Install ingress nginx
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/mandatory.yaml

# Initialise ingress nginx
minikube addons enable ingress

# Create a secret for mongodb
kubectl create secret generic mongoauth --from-literal MONGO_USERNAME=root --from-literal MONGO_PASSWORD=secret

# Deploy objects
kubectl apply -f k8s/

# Get ip and access via given ip
minikube ip
```