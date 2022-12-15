import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TacGiaService } from './tac-gia.service';
import { CreateTacGiaDto } from './dto/create-tac-gia.dto';
import { UpdateTacGiaDto } from './dto/update-tac-gia.dto';

@Controller('tac-gia')
export class TacGiaController {
  constructor(private readonly tacGiaService: TacGiaService) {}

  @Post()
  async create(@Body() createTacGiaDto: CreateTacGiaDto) {
    return await this.tacGiaService.create(createTacGiaDto);
  }

  @Get()
  async findAll() {
    return await this.tacGiaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.tacGiaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTacGiaDto: UpdateTacGiaDto) {
    return this.tacGiaService.update(+id, updateTacGiaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tacGiaService.remove(+id);
  }
}
