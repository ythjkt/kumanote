'''
This file is meant to be run inside travis ci for deployment.
Travis CI will be preconfigured by /.travis.yml to have docker logged in
and kubectl installed
'''
# Build docker images and tag with git SHA
docker build -t ythjkt/kumanote-client:latest -t ythjkt/kumanote-client:$SHA -f ./client/Dockerfile ./client
docker build -t ythjkt/kumanote-api:latest -t ythjkt/kumanote-api:$SHA -f ./api/Dockerfile ./api

# Push to Dockerhub
docker push ythjkt/kumanote-client:latest
docker push ythjkt/kumanote-api:latest

docker push ythjkt/kumanote-client:$SHA
docker push ythjkt/kumanote-api:$SHA

# Create services
kubectl apply -f k8s

# Update images used by pods in k8s to the latest
kubectl set image deployments/api-deployment api=ythjkt/kumanote-api:$SHA
kubectl set image deployments/client-deployment client=ythjkt/kumanote-client:$SHA