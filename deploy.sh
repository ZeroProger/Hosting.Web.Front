#!/bin/bash

set -eu
#Checking for variables exists

check_for_var () {
    echo $1 > /dev/null
}

check_for_var $DEPLOY_ARCHIVE
check_for_var $MACHINES_IPS
check_for_var $MACHINE_PRIVATE_SSH_KEY
check_for_var $MACHINE_USER

#Preparing

echo "[DEPLOY] Prepare for deployment..."

chmod 600 $MACHINE_PRIVATE_SSH_KEY

echo "[DEPLOY] Prepare completed"

#Package

echo "[DEPLOY] Package starting..."
echo "[DEPLOY] Will be packaged to the $DEPLOY_ARCHIVE file"

echo "[DEPLOY] Switching to PROD environment..."
rm -f ./.env
cp ./.deploy/.prod-env ./.env
echo "[DEPLOY] Successfully switched"

echo "[DEPLOY] Installing NPM packages..."
npm i
echo "[DEPLOY] Successfully installed"
echo "[DEPLOY] Starting build..."
npm run build
echo "[DEPLOY] Successfully builded"
echo "[DEPLOY] Starting export assets..."
npm run export
echo "[DEPLOY] Successfully exported assets"

echo "[DEPLOY] Zipping assets..."
zip -r $DEPLOY_ARCHIVE ./out/*
echo "[DEPLOY] Successfully zipped assets"

#Deploy

IFS=';' read -ra v_ip_array <<< "$MACHINES_IPS"
for machine in ${v_ip_array[*]}; do
    echo "[DEPLOY] Deploying to machine..."
    ASSETS_PATH=/home/$MACHINE_USER/assets/assets
    yes | scp -oStrictHostKeyChecking=no -P 22 -i $MACHINE_PRIVATE_SSH_KEY $DEPLOY_ARCHIVE $MACHINE_USER@$machine:$ASSETS_PATH
    yes | ssh -oStrictHostKeyChecking=no -i $MACHINE_PRIVATE_SSH_KEY $MACHINE_USER@$machine "unzip $ASSETS_PATH/$DEPLOY_ARCHIVE"
    echo "[DEPLOY] Deployed"
done

echo "[DEPLOY] Deployment completed successfully"
