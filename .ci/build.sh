set -eu
cd ..
npm i
npm run build
npm run export
zip -r package.zip ./out/*