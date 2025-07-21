import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import {join} from "path";
import {ClientsModule, Transport} from "@nestjs/microservices";
import {AUTH_SERVICE, USER_SERVICE} from "../../../common/constant";

@Module({
    imports: [
        ClientsModule.register([
            {
                name: USER_SERVICE,
                transport: Transport.GRPC,
                options: {
                    package: 'user',
                    protoPath: join(process.cwd(), '/proto/user.proto'),
                    url: 'localhost:50051',
                },
            },
            {
                name: AUTH_SERVICE,
                transport: Transport.GRPC,
                options: {
                    package: 'auth',
                    protoPath: join(process.cwd(), '/proto/auth.proto'),
                    url: 'localhost:50055',
                },
            },
        ]),
    ],
    controllers: [BookController],
    providers: [BookService],
})
export class BookModule {}