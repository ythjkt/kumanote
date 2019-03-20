'''
* Running this script will update the latest image used in production.
* Do not use.
'''
SHA=$(git rev-parse HEAD)
# Build docker images and tag with git SHA
docker build -t ythjkt/kumanote-client:latest -t ythjkt/kumanote-client:$SHA -f ./client/Dockerfile ./client
docker build -t ythjkt/kumanote-api:latest -t ythjkt/kumanote-api:$SHA -f ./api/Dockerfile ./api

# Push to Dockerhub
docker push ythjkt/kumanote-client:latest
docker push ythjkt/kumanote-api:latest

docker push ythjkt/kumanote-client:$SHA
docker push ythjkt/kumanote-api:$SHA
