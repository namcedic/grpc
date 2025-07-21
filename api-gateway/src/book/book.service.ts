import {BadRequestException, Inject, Injectable} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {firstValueFrom} from 'rxjs';
import {BOOK_SERVICE_NAME, BookRequest, BookResponse, BookServiceClient} from "../../generated/book";
import {BOOK_SERVICE} from "../../../common/constant";

@Injectable()
export class BookService {
    private bookService: BookServiceClient;

    constructor(@Inject(BOOK_SERVICE) private bookClient: ClientGrpc) {
        this.bookService = this.bookClient.getService<BookServiceClient>(BOOK_SERVICE_NAME);

    }

    async getBook(data: BookRequest): Promise<BookResponse> {
        try {
           const book = await firstValueFrom(this.bookService.getBook(data));
            console.log(book)
            return book
        } catch (err: any) {
            throw new BadRequestException(err.message);
        }
    }
}