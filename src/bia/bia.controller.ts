import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BiaService } from './bia.service';
import { CreateBiaDto } from './dto/create-bia.dto';
import { UpdateBiaDto } from './dto/update-bia.dto';

@Controller('bia')
export class BiaController {
  constructor(private readonly biaService: BiaService) {}

  @Post()
  create(@Body() createBiaDto: CreateBiaDto) {
    return this.biaService.create(createBiaDto);
  }

  @Get()
  findAll() {
    return this.biaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.biaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBiaDto: UpdateBiaDto) {
    return this.biaService.update(+id, updateBiaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.biaService.remove(+id);
  }
}
