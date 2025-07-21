import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {join} from "path";
import {ClientsModule, Transport} from "@nestjs/microservices";
import {USER_SERVICE} from "../../../common/constant";
import { JwtModule } from '@nestjs/jwt';

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
        ]),
        JwtModule.register({
            secret: 'your-secret-key',
            signOptions: { expiresIn: '1d' },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}