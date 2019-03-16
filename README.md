# Kumanote
A web based note taking app.

## Getting Started

### Prerequisit
Have docker installed


## Running The Application Locally with Docker Compose
```
# Run the following command
# Then go to localhost:3051
docker-compose up
```

## Running The Application Locally with Minikube
This is a long process. To quickly setup a dev environment,
use docker-compose instead.

The following process uses helm to install ingress nginx to mimic production setting.
** Easy fix for ingress rewrite problem
** Will update as soon as possible.
```
minikube start

# Enable ingress through addons
minikube addons enable ingress

# Create a secret for mongodb
kubectl create secret generic mongoauth --from-literal MONGO_USERNAME=root --from-literal MONGO_PASSWORD=secret

# Change ingress-service.yml rewrite syntax to pre 0.22.0 version syntax
# https://kubernetes.github.io/ingress-nginx/examples/rewrite/

# Deploy ingress nginx related pods
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/mandatory.yaml

# Deploy objects
kubectl apply -f k8s/

# Get ip and access via given ip
minikube ip
```

** Currently this does not work.
The following also assumes that you are using a mac.
```
# Install helm if you do not have it
brew install kubernetes-helm

# Start minikube
minikube start

# Create a RBAC role for tiller server
kubectl create serviceaccount --namespace kube-system tiller

# Bind a role to the role
kubectl create clusterrolebinding tiller-cluster-rule --clusterrole=cluster-admin --serviceaccount=kube-system:tiller

# Install tiller server to cluster
helm init --service-account tiller --upgrade --history-max 200

# Then using tiller, install ingress nginx
helm install stable/nginx-ingress --name my-nginx --set rbac.create=true

# Deploy ingress nginx related pods
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/mandatory.yaml

# Create a secret for mongodb
kubectl create secret generic mongoauth --from-literal MONGO_USERNAME=root --from-literal MONGO_PASSWORD=secret

# Deploy objects
kubectl apply -f k8s/

# Get ip and access via given ip
minikube ip
```

## Setting up Google Cloud Platform
1. Create a project
2. Enable Kubernetes Engine and create a cluster

### Creating a Service Account for Travis CI
1. On Google Cloud click create a new service account
2. Select Kubernetees Engine Admin as the role
3. Create JSON key
4. Use travis cli to encrypt the secret key
```
docker run -it -v $(pwd):/app ruby:2.3 sh
gem install travis
travis login # With github
# Copy json file into the volumed directory
cd app
travis encrypt-file service-account.json -r ythjkt/kumanote
# DELETE THE ORIGINAL KEY FILE
```