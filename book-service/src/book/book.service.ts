import {BadRequestException, Inject, Injectable} from '@nestjs/common';
import { BookResponse } from '../../generated/book';
import {ClientGrpc} from "@nestjs/microservices";
import {firstValueFrom} from "rxjs";
import {USER_SERVICE_NAME, UserServiceClient} from "../../generated/user";
import {USER_SERVICE} from "../../../common/constant";

@Injectable()
export class BookService {
    private readonly books: BookResponse[] = [
        { id: 1, title: 'Book One', author: '1' },
        { id: 2, title: 'Book Two', author: '2' },
    ];

    private userService: UserServiceClient;

    constructor(@Inject(USER_SERVICE) private userClient: ClientGrpc) {
        this.userService = this.userClient.getService<UserServiceClient>(USER_SERVICE_NAME);
    }

  async getBook(id: number): Promise<BookResponse> {
        const book = this.books.find((b) => b.id === id);
        if (!book) {
            throw new BadRequestException('Book not found');
        }
        const author = await firstValueFrom(this.userService.getUser({ id: parseInt(book.author) }));

        if (!author) {
            throw new BadRequestException('Author not found');
        }
        return {
            ...book,
            author: author.name
        }

    }
}