frontend_dir?=./react-frontend
backend_dir?=./spring-backend

install:
	cd ${frontend_dir} && npm install && cd -

build:
	cd ${frontend_dir} && npm run build && cd -
	cp -r ${frontend_dir}/public/* ${backend_dir}/build/resources/main/static/
	cd ${backend_dir} && ./gradlew build && cd -

clean:
	cd ${frontend_dir} && npm run clean && cd -
	cd ${backend_dir} && ./gradlew clean && cd -