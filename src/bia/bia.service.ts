import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

import { CreateBiaDto } from './dto/create-bia.dto';
import { UpdateBiaDto } from './dto/update-bia.dto';

@Injectable()
export class BiaService {
  constructor(private prisma: PrismaService) {}

  async create(createBiaDto: CreateBiaDto) {
    const { name } = createBiaDto;
    await this.prisma.bia.create({
      data: {
        name,
      },
    });
    return { message: 'tao thanh cong' };
  }

  async findAll() {
    const Bia = await this.prisma.bia.findMany({
      select: { id: true, name: true },
    });
    return { Bia };
  }

  async findOne(id: number) {
    const findBia = await this.prisma.bia.findUnique({ where: { id } });
    return { findBia };
  }

  async update(id: number, updateBiaDto: UpdateBiaDto) {
    const updateBia = await this.prisma.tacGia.update({
      where: { id },
      data: { ...updateBiaDto },
    });
    return { updateBia };
  }

  async remove(id: number) {
    return await this.prisma.bia.delete({
      where: { id },
    });
  }
}
