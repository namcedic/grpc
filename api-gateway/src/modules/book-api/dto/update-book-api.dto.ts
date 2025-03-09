import { PartialType } from '@nestjs/mapped-types';
import { CreateBookApiDto } from './create-book-api.dto';

export class UpdateBookApiDto extends PartialType(CreateBookApiDto) {}
