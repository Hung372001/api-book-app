import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateNhaxuatbanDto } from './create-nhaxuatban.dto';

export class UpdateNhaxuatbanDto extends PartialType(CreateNhaxuatbanDto) {
  @IsString()
  @IsNotEmpty()
  name: string;
}
