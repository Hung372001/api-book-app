import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateTacGiaDto } from './dto/create-tac-gia.dto';
import { UpdateTacGiaDto } from './dto/update-tac-gia.dto';

@Injectable()
export class TacGiaService {
  constructor(private prisma: PrismaService) {}

  async create(createTacGiaDto: CreateTacGiaDto) {
    const { name } = createTacGiaDto;
    await this.prisma.tacGia.create({
      data: {
        name,
      },
    });
    return { message: 'tao thanh cong' };
  }

  async findAll() {
    const tacGia = await this.prisma.tacGia.findMany({
      select: { id: true, name: true },
    });
    return { tacGia };
  }

  async findOne(id: number) {
    const findTacGia = await this.prisma.tacGia.findUnique({ where: { id } });
    return { findTacGia };
  }

  async update(id: number, updateTacGiaDto: UpdateTacGiaDto) {
    const updateTacGia = await this.prisma.tacGia.update({
      where: { id },
      data: { ...updateTacGiaDto },
    });
    return { updateTacGia };
  }

  async remove(id: number) {
    return await this.prisma.tacGia.delete({
      where: { id },
    });
  }
}
