#!/bin/sh
frontend_dir="./react-frontend"
backend_dir="./spring-backend"

echo $frontend_dir
cd ${frontend_dir} && npm install && npm run build && cd -
cp -r ${frontend_dir}/build ${backend_dir}/build/resources/main/static/
cd $backend_dir && ./gradlew build && cd -
