import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {ClientsModule, Transport} from "@nestjs/microservices";
import {join} from "path";
import {BookModule} from "../book/book.module";

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'USER_SERVICE',
                transport: Transport.GRPC,
                options: {
                    package: 'user',
                    protoPath: join(process.cwd(), '/proto/user.proto'),
                    url: 'localhost:50051',
                },
            },
            {
                name: 'BOOK_SERVICE',
                transport: Transport.GRPC,
                options: {
                    package: 'book',
                    protoPath: join(process.cwd(), '/proto/book.proto'),
                    url: 'localhost:50052',
                },
            },
        ]),
    ],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}