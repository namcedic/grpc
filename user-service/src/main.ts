import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { UserModule } from './user/user.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(UserModule, {
    transport: Transport.GRPC,
    options: {
      package: 'userproto',
      protoPath: join(__dirname, '../../../../proto/user.proto'),
      url: `0.0.0.0:${process.env.GRPC_PORT || 50051}`,
    },
  });

  await app.listen();
}
bootstrap();
