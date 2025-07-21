import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';
import {GrpcMetadataInterceptor} from "../../common/grpc-metadata.interceptor";

@Module({
    imports: [
        UserModule,
        BookModule,
    ],
    providers: [GrpcMetadataInterceptor],
})
export class AppModule {}