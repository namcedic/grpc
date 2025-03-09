## Install packages
````bash
cd api-gatewau
yarn install

cd book-service
yarn install

cd user-service
yarn install

````
## Compile proto files
````bash
protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./ --ts_proto_opt=nestJs=true ./proto/user.proto

protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./ --ts_proto_opt=nestJs=true ./proto/book.proto

````

## Run book-service
````bash
yarn run:start

````

## Run user-service
````bash
yarn run:start

````


## Run api-gateway
````bash
yarn run:start

````

## Run api
http://localhost:3000/book-api/:id
