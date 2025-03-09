import { Module } from '@nestjs/common';
import { BookApiModule } from './modules/book-api/book-api.module';
import 'reflect-metadata';

@Module({
  imports: [BookApiModule],
})
export class AppModule {}
