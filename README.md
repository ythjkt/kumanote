# Kumanote
A web based note taking app.

<p align='center'>
  <img src="/docs/assets/demo.gif" width="66%%">
</p>

## Table of Content
- [Setting Up](#setting-up)
  - [Prerequietes](#prerequietes)
  - [Running the app locally](#running-the-app-locally)
- [Development](#development)
  - [Technologies](#technologies)
  - [Directory structure](#directory-structure)
- [Deployment](docs/deployment.md)

These instructions will help you setup the application on your local machine for development and testing purposes.

## Setting Up
### Prerequisites
You will need the following preinstalled on your local machine.
```sh
# For quick docker-compose setup
Docker

# For setup similar to actual deployment
VirtualBox
Minikube
kubectl
```

The following is an installation guide for MacOS. For the other OS, check out the [the minikube documentation](https://kubernetes.io/docs/tasks/tools/install-minikube/#install-minikube)

```sh
brew cask install virtualbox
brew install kubectl
brew cask install minikube
```

### Running the app locally
```sh
git clone git@github.com:ythjkt/kumanote.git
```

#### With Docker Compose
```sh
docker-compose up # It will run on localhost:3051
```

#### With Minikube
This is a long process. To quickly run the application, use docker-compose instead.

```sh
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
- **React**: Frontend
- **Nginx**: Client server for React in production
- **Express**: API Server
- **MongoDB**: Database

### Directory Structure
```sh
kumanote/
├── api       # api server
├── client    # React app
├── docs
├── k8s       # Configs for Kubernetes Objects
├── k8s.dev
├── scripts   # Bash scripts
└── nginx     # Load balancer for local env
```
