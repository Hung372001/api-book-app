import { IsNotEmpty, IsString } from 'class-validator';

export class CreateNhaxuatbanDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
