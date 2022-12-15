import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateNhaCungCapDto } from './create-nha-cung-cap.dto';

export class UpdateNhaCungCapDto extends PartialType(CreateNhaCungCapDto) {
  @IsString()
  @IsNotEmpty()
  name: string;
}
