# Deployment
## Overview
Currently this project is deployed on Google Cloud Platform. For production setup it uses the following applications.

```sh
- Github      # Repository
- Travis CI   # CI/CD 
- Dockerhub   # Hosting production images
```

Once the master branch is updated, travis ci runs a test defined in .travis.yml before_install. If the test passes (exitees with status code 0), then travis ci updates images on Dockerhub, creates objects defined in k8s/.

## Steps
1. Create Github repository
2. Create Google Cloud project
    1. Create a project
    2. Enable Kubernetes Engine
3. [Link Github to Travis CI](#linking-github-to-travis-ci)
4. [Imperatively create objects on Google Cloud](#creating-objects-on-google-cloud)
5. Merge changes to master branch # Then let travis ci take care of the rest!
6. [Setup domain and https](#setting-up-domain-and-https)

### Linking Github to Travis CI
1. Go to travis ci and enable the github repository
2. Generate a service account on Google Cloud and download private key as json file
3. Download Travis CLI and encrypt the private key
```sh
# Save the private key as service-accout.json
# Have service-account.json in the current directory

# Mount pwd as volume to ruby container
docker run -it -v $(pwd):/app ruby:2.3 sh 

# Inside the container
gem install travis

# Login to travis
travis login

# This will create service-account.json.enc in pwd
# and add environmental variables to the project in travis ci
travis encrypt-file service-account.json -r <github username>/<repository>

# Copy and paste decryption command for travis ci to .travis.yml
# Exampe openssl aes-256-cbc -K $encrypted_0c35eebf403c_key -iv $encrypted_0c35eebf403c_iv -in service-account.json.enc -out service-account.json -d

# Do not forget this!!! Never upload private key to github
rm service-account.json
```
4. Link gcloud to the kubernetes cluster inside .travis.yml
Within .travis.yml
```yml
before_install:
  # ...
  # Other configs
  # ...
  # Set up gcloud to a specific project
  - gcloud config set project kumanote
  - gcloud config set compute/zone us-central1-a
  - gcloud container clusters get-credentials standard-cluster-1
```
5. Add Docker credentials to travis ci env # DOCKER_USERNAME, DOCKER_PASSWORD

### Creating Objects on Google Cloud
1. Open up Cloud Shell on Google Cloud and tie gcloud command to the cluster
```sh
gcloud config set project <project id>
gcloud config set compute/zone <compute zone>
gcloud container clusters get-credentials <cluster id>

# You can run the following command to check if active shell is tied to the cluster
kubectl get pods
```
2. Create secret in the cluster
```sh
# In productin, replace `root` and `secret` with more secure string
kubectl create secret generic mongoauth --from-literal MONGO_USERNAME=root --from-literal MONGO_PASSWORD=secret
```
3. Installing Helm, a package manager for kubernetes
Inside google cloud active shell, run the following command
```sh
curl https://raw.githubusercontent.com/helm/helm/master/scripts/get > get_helm.sh
chmod 700 get_helm.sh
./get_helm.sh
```
For more info on helm check [Helm Documentation](https://helm.sh/docs/using_helm/#from-script)

4. Setup Helm
```sh
# Create an RBAC role for tiller server
kubectl create serviceaccount --namespace kube-system tiller
kubectl create clusterrolebinding tiller-cluster-rule --clusterrole=cluster-admin --serviceaccount=kube-system:tiller

# Init helm with the role
helm init --service-account tiller --upgrade --history-max 200
```
For more info on Heml and RBAC check [Helm and RBAC](https://helm.sh/docs/using_helm/#role-based-access-control)

5. Install nginx ingress using Helm
```sh
helm install stable/nginx-ingress --name my-nginx --set rbac.create=true
```

### Setting Up Domain and Https
1. Create A record and CNAME on google domains

| Name | Type  | TTL | Data     |
|------|-------|-----|----------|
| @    | A     | 1h  | [IP]     |
| www  | CNAME | 1h  | [domain] |

2. Install [Cert Manager](https://docs.cert-manager.io/en/latest/getting-started/install.html) with Helm
3. Create ClusterIssuer (issuer.yml) and Certificate (certificate.yml) in k8s
4. Update ingress-service.yml