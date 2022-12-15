import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBiaDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
