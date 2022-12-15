import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NhaCungCapService } from './nha-cung-cap.service';
import { CreateNhaCungCapDto } from './dto/create-nha-cung-cap.dto';
import { UpdateNhaCungCapDto } from './dto/update-nha-cung-cap.dto';

@Controller('nha-cung-cap')
export class NhaCungCapController {
  constructor(private readonly nhaCungCapService: NhaCungCapService) {}

  @Post()
  create(@Body() createNhaCungCapDto: CreateNhaCungCapDto) {
    return this.nhaCungCapService.create(createNhaCungCapDto);
  }

  @Get()
  findAll() {
    return this.nhaCungCapService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nhaCungCapService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNhaCungCapDto: UpdateNhaCungCapDto) {
    return this.nhaCungCapService.update(+id, updateNhaCungCapDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nhaCungCapService.remove(+id);
  }
}
