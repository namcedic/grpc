import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Inject,
  OnModuleInit,
  NotFoundException,
} from '@nestjs/common';
import { CreateBookApiDto } from './dto/create-book-api.dto';
import { ClientGrpc } from '@nestjs/microservices';
import { BookResponse, BookServiceClient } from '../../../../proto/book';
import { firstValueFrom } from 'rxjs';

@Controller('book-api')
export class BookApiController implements OnModuleInit {
  private bookService: BookServiceClient;
  constructor(@Inject('BOOKPROTO_PACKAGE_NAME') private client: ClientGrpc) {}

  onModuleInit(): any {
    this.bookService = this.client.getService<BookServiceClient>('BookService');
  }

  @Post()
  create(@Body() createBookApiDto: CreateBookApiDto) {
    return this.bookService.createBook(createBookApiDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<BookResponse | undefined> {
    const result = this.bookService.getBook({ id });

    const book = await firstValueFrom(result);

    if (!book.data) {
      throw new NotFoundException('Book does not exist');
    }
    return book;
  }
}
