import {Controller, Get, Param, Inject, UseGuards} from '@nestjs/common';
import { BookService } from './book.service';
import {BookResponse} from "../../generated/book";
import {JwtAuthGuard} from "../../../libs/guards/auth.guard";

@Controller('books')
export class BookController {
    constructor(private readonly bookService: BookService) {}

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    getBook(@Param('id') id: string): Promise<BookResponse> {
        console.log('1')
        return this.bookService.getBook({ id: parseInt(id) });
    }
}