import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateLoaiSachDto } from './create-loai-sach.dto';

export class UpdateLoaiSachDto extends PartialType(CreateLoaiSachDto) {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  ngonngu: string;
}
