import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {ClientsModule, Transport} from "@nestjs/microservices";
import {join} from "path";
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
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}