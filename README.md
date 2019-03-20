# Kumanote
A web based note taking app.

## Table of Content
- Setting Up
  - Prerequietes
  - Running the app locally
- Development
  - Technologies
  - Directory structure
- Deployment

These instructions will help you setup the application on your local machine for development and testing purposes. For deploymennt, go to [docs/deployment.md](docs/deployment.md).

## Setting Up
### Prerequisites
You will need the following preinstalled on your local machine.
```
# For quick docker-compose setup
Docker

# For setup similar to actual deployment
VirtualBox
Minikube
kubectl
```

The following is an installation guide for MacOS. For the other OS, check out the [the minikube documentation](https://kubernetes.io/docs/tasks/tools/install-minikube/#install-minikube)

```
brew cask install virtualbox
brew install kubectl
brew cask install minikube
```

### Running the app locally
```
git clone git@github.com:ythjkt/kumanote.git
```

#### With Docker Compose
```
docker-compose up # It will run on localhost:3051
```

#### With Minikube
This is a long process. To quickly run the application, use docker-compose instead.

```
# Make sure that minikube is running
minikube start

# Create a secret for mongodb
kubectl create secret generic mongoauth --from-literal MONGO_USERNAME=root --from-literal MONGO_PASSWORD=secret

# Enable ingress through addons
minikube addons enable ingress

# Deploy ingress nginx related pods
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/mandatory.yaml

# Deploy objects
kubectl apply -f k8s/

# Replace ingress-service with develop version
kubectl delete -f k8s/ingress-service.yml
kubectl apply -f k8s.dev/ingress-service.yml

# Get ip and access via given ip
minikube ip
```

## Development
### Technologies
- React: Frontend
- Nginx: Client server for React in production
- Express: API Server
- MongoDB: Database

### Directory Structure
```
kumanote/
├── api # api server
├── client # React app
├── deploy.sh 
├── docker-compose.yml
├── docs
├── k8s # Configs for Kubernetes Objects
├── k8s.dev
├── nginx # Load balancer for local development
└── service-account.json.enc # Encrypted access token for GC used by Travis
```

7 directories, 5 files
