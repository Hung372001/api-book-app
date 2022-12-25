import { Bia, Book } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import exp from 'constants';

export class FilterBookPriceDto {
  min: number;
  //   max: number;
}
export interface fillterTest {
  nameloaiSach: string;
  nameTheLoai: string;
  nameNhaXuatBan: string;
  nameBia: string;
  minPrice: number;
  maxPrice: number;
}
