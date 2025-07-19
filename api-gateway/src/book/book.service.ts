import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import {BOOK_SERVICE_NAME, BookRequest, BookResponse, BookServiceClient} from "../../generated/book";

@Injectable()
export class BookService {
    private bookService: BookServiceClient;

    constructor(@Inject('BOOK_SERVICE') private bookClient: ClientGrpc) {
        this.bookService = this.bookClient.getService<BookServiceClient>(BOOK_SERVICE_NAME);

    }

    getBook(data: BookRequest): Observable<BookResponse> {
        return this.bookService.getBook(data);
    }
}