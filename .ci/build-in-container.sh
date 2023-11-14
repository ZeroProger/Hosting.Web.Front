WORKIND_DIR=simple-hosting.web.front

docker run \
--name build-frontapp \
-v $(pwd)/:/$WORKIND_DIR/ \
-d \
-w /$WORKIND_DIR \
kirieshki/web-api-front-build-agent:latest \
bash build.sh