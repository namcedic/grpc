import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import {ClientsModule, Transport} from "@nestjs/microservices";
import {join} from "path";
import {BOOK_SERVICE, USER_SERVICE} from "../../../common/constant";

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
                name: BOOK_SERVICE,
                transport: Transport.GRPC,
                options: {
                    package: 'book',
                    protoPath: join(process.cwd(), '/proto/book.proto'),
                    url: 'localhost:50052',
                },
            },
        ]),
    ],
    controllers: [BookController],
    providers: [BookService],
})
export class BookModule {}