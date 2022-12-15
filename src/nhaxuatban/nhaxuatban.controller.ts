import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NhaxuatbanService } from './nhaxuatban.service';
import { CreateNhaxuatbanDto } from './dto/create-nhaxuatban.dto';
import { UpdateNhaxuatbanDto } from './dto/update-nhaxuatban.dto';

@Controller('nha-xuat-ban')
export class NhaxuatbanController {
  constructor(private readonly nhaxuatbanService: NhaxuatbanService) {}

  @Post()
  create(@Body() createNhaxuatbanDto: CreateNhaxuatbanDto) {
    return this.nhaxuatbanService.create(createNhaxuatbanDto);
  }

  @Get()
  findAll() {
    return this.nhaxuatbanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nhaxuatbanService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNhaxuatbanDto: UpdateNhaxuatbanDto,
  ) {
    return this.nhaxuatbanService.update(+id, updateNhaxuatbanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nhaxuatbanService.remove(+id);
  }
}
