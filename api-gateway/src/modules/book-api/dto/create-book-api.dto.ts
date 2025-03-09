import { IsString } from 'class-validator';

export class CreateBookApiDto {
  @IsString()
  title: string;
}
