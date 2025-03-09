import { OnModuleInit } from '@nestjs/common';
import { CreateBookApiDto } from './dto/create-book-api.dto';
import { ClientGrpc } from '@nestjs/microservices';
export declare class BookApiController implements OnModuleInit {
  private client;
  private bookService;
  constructor(client: ClientGrpc);
  onModuleInit(): any;
  create(
    createBookApiDto: CreateBookApiDto,
  ): import('rxjs').Observable<import('../../../../proto/book').BookResponse>;
  findOne(
    id: number,
  ): import('rxjs').Observable<import('../../../../proto/book').BookResponse>;
}
