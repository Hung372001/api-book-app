import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateTacGiaDto } from './create-tac-gia.dto';

export class UpdateTacGiaDto extends PartialType(CreateTacGiaDto) {
  @IsString()
  @IsNotEmpty()
  name: string;
}
