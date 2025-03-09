import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { BookModule } from './book/book.module';
import { join } from 'path';
import * as process from 'node:process';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(BookModule, {
    transport: Transport.GRPC,
    options: {
      package: 'bookproto',
      protoPath: join(__dirname, '../../../../proto/book.proto'),
      url: `0.0.0.0:${process.env.GRPC_PORT || 50052}`,
    },
  });

  await app.listen();
}
bootstrap();
