import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { BookService } from './book.service';
import {
  BookResponse,
  CreateBookRequest,
  GetBookRequest,
} from '../../../proto/book';

@Controller()
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @GrpcMethod('BookService', 'getBook')
  async getBook(data: GetBookRequest): Promise<BookResponse | undefined> {
    return this.bookService.getBook(data);
  }

  @GrpcMethod('BookService', 'createBook')
  async createBook(data: CreateBookRequest): Promise<BookResponse | undefined> {
    return this.bookService.createBook(data);
  }
}
