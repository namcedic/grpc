import { Module } from '@nestjs/common';
import { BookApiController } from './book-api.controller';
import { join } from 'path';
import { ClientsModule, Transport } from '@nestjs/microservices';
import 'reflect-metadata';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BOOKPROTO_PACKAGE_NAME',
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:50052',
          package: 'bookproto',
          protoPath: join(__dirname, '../../../../../../proto/book.proto'),
        },
      },
    ]),
  ],
  controllers: [BookApiController],
  providers: [],
})
export class BookApiModule {}
