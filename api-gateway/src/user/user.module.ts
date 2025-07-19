import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {ClientsModule, Transport} from "@nestjs/microservices";
import {join} from "path";
import {USER_SERVICE} from "../../../common/constant";

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
            }
        ]),
    ],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}