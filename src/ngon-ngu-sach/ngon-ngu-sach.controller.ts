import { Controller } from '@nestjs/common';
import { Body, Get, Param, Post } from '@nestjs/common/decorators';
import { NgonNguSach } from '@prisma/client';
import { NgonNguSachService } from './ngon-ngu-sach.service';

@Controller('ngon-ngu-sach')
export class NgonNguSachController {
  constructor(private readonly ngonNguSachService: NgonNguSachService) {}
  @Post()
  create(@Body() loaiSachData: { name: string }): Promise<NgonNguSach> {
    const { name } = loaiSachData;
    return this.ngonNguSachService.create({
      name,
    });
  }
  @Get()
  findAll() {
    return this.ngonNguSachService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ngonNguSachService.findOne(+id);
  }
}
