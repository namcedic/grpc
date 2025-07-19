import { Injectable } from '@nestjs/common';
import { BookResponse } from '../../generated/book';

@Injectable()
export class BookService {
    private readonly books: BookResponse[] = [
        { id: 1, title: 'Book One', author: 'Author One' },
        { id: 2, title: 'Book Two', author: 'Author Two' },
    ];

    getBook(id: number): BookResponse {
        const book = this.books.find((b) => b.id === id);
        return book || { id: 0, title: '', author: '' };
    }
}