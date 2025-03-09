## Compile proto files
````bash
protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./ --ts_proto_opt=nestJs=true ./proto/user.proto

protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./ --ts_proto_opt=nestJs=true ./proto/book.proto

````
