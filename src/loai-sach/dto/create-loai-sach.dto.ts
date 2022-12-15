import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLoaiSachDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  ngonngu: string;
}
