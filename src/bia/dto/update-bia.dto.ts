import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateBiaDto } from './create-bia.dto';

export class UpdateBiaDto extends PartialType(CreateBiaDto) {
  @IsString()
  @IsNotEmpty()
  name: string;
}
