import { Controller, Get, Param, Inject } from '@nestjs/common';
import { BookService } from './book.service';
import { Observable } from 'rxjs';
import {BookResponse} from "../../generated/book";

@Controller('books')
export class BookController {
    constructor(private readonly bookService: BookService) {}

    @Get(':id')
    getBook(@Param('id') id: string): Observable<BookResponse> {
        console.log('first step')
        return this.bookService.getBook({ id: parseInt(id) });
    }
}