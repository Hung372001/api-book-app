import { IsNotEmpty, IsString } from 'class-validator';

export class CreateNhaCungCapDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
