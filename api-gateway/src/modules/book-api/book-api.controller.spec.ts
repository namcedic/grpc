import { Test, TestingModule } from '@nestjs/testing';
import { BookApiController } from './book-api.controller';
import { BookApiService } from './book-api.service';

describe('BookApiController', () => {
  let controller: BookApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookApiController],
      providers: [BookApiService],
    }).compile();

    controller = module.get<BookApiController>(BookApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
