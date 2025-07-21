import {Controller, UseGuards} from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { BookService } from './book.service';
import {BookRequest, BookResponse} from "../../generated/book";
// import {JwtAuthGuard} from "../../../libs/guards/auth.guard";

@Controller()
export class BookController {
    constructor(private readonly bookService: BookService) {}

    // @UseGuards(JwtAuthGuard)
    @GrpcMethod('BookService', 'GetBook')
    async getBook(data: BookRequest): Promise<BookResponse> {
        return this.bookService.getBook(data.id);
    }
}