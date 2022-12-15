import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TheLoaiService } from './the-loai.service';
import { TheLoai as TheLoaiModel } from '@prisma/client';

@Controller('the-loai')
export class TheLoaiController {
  constructor(private readonly theLoaiService: TheLoaiService) {}

  @Post('')
  create(
    @Body()
    theLoaiData: {
      name: string;
      loaiSachName: string;
    },
  ): Promise<TheLoaiModel> {
    const { name, loaiSachName } = theLoaiData;
    return this.theLoaiService.create({
      name,
      loaiSach: {
        connect: { name: loaiSachName },
      },
    });
  }

  @Get()
  findAll() {
    return this.theLoaiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.theLoaiService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    theLoaiData: {
      name: string;
      loaiSachName: string;
    },
  ): Promise<TheLoaiModel> {
    const { name, loaiSachName } = theLoaiData;
    return this.theLoaiService.update({
      where: { id: Number(id) },
      data: {
        ...theLoaiData,
      },
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.theLoaiService.remove(+id);
  }
}
