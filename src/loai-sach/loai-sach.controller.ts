import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LoaiSachService } from './loai-sach.service';
import { PrismaService } from 'prisma/prisma.service';
import { CreateLoaiSachDto } from './dto/create-loai-sach.dto';
import { UpdateLoaiSachDto } from './dto/update-loai-sach.dto';
import { LoaiSach as LoaiSachModel } from '@prisma/client';

@Controller('loai-sach')
export class LoaiSachController {
  constructor(private readonly loaiSachService: LoaiSachService) {}

  @Post()
  create(
    @Body() loaiSachData: { name: string; ngonNguSach: string; isHot: boolean },
  ): Promise<LoaiSachModel> {
    const { name, ngonNguSach } = loaiSachData;
    return this.loaiSachService.create({
      name,
      NgonNguSach: {
        connect: { name: ngonNguSach },
      },
      isHot: false,
    });
  }

  @Get()
  findAll() {
    return this.loaiSachService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loaiSachService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLoaiSachDto: UpdateLoaiSachDto,
  ) {
    return this.loaiSachService.update(+id, updateLoaiSachDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loaiSachService.remove(+id);
  }
}
