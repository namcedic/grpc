import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { BookService } from './book.service';
import {BookRequest, BookResponse} from "../../generated/book";

@Controller()
export class BookController {
    constructor(private readonly bookService: BookService) {}

    @GrpcMethod('BookService', 'GetBook')
    getBook(data: BookRequest): BookResponse {
        return this.bookService.getBook(data.id);
    }
}