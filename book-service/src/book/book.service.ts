import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookEntity } from './entities/book.entity';
import {
  BookResponse,
  CreateBookRequest,
  GetBookRequest,
} from '../../../proto/book';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntity)
    private bookRepo: Repository<BookEntity>,
  ) {}

  async getBook(data: GetBookRequest): Promise<BookResponse | undefined> {
    const book = await this.bookRepo.findOne({ where: { id: data.id } });

    return {
      data: book ? book : undefined,
    };
  }

  async createBook(data: CreateBookRequest): Promise<BookResponse | undefined> {
    const book = this.bookRepo.create({ title: data.title });
    await this.bookRepo.save(book);
    return {
      data: book ? book : undefined,
    };
  }
}
