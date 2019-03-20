# Deployment
## Overview
Currently this project is deployed on Google Cloud Platform. For production setup it uses the following applications.

```sh
- Github      # Repository
- Travis CI   # CI/CD 
- Dockerhub   # Hosting production images
```
## Steps
1. Create Github repository
2. [Connect Github to Travis CI](#connect-github-to-travis-ci)
3. Setup Google Cloud
    1. Create a project
    2. Enable Kubernetes Engine
    3. Install neccessary objects
4. Merge changes to master branch # Then let travis ci take care of the rest!

### Connect Github to Travis CI
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