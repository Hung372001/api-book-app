import { IsNotEmpty, IsString } from 'class-validator';

export class BookNameDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  bookImg: string;
}
