import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTacGiaDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
