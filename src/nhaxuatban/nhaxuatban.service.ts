import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateNhaxuatbanDto } from './dto/create-nhaxuatban.dto';
import { UpdateNhaxuatbanDto } from './dto/update-nhaxuatban.dto';

@Injectable()
export class NhaxuatbanService {
  constructor(private prisma: PrismaService) {}
  async create(createNhaxuatbanDto: CreateNhaxuatbanDto) {
    const { name } = createNhaxuatbanDto;
    await this.prisma.nhaXuatBan.create({
      data: {
        name,
      },
    });
    return { message: 'tao thanh cong' };
  }

  async findAll() {
    const nhaXuatBan = await this.prisma.nhaXuatBan.findMany({
      select: { id: true, name: true },
    });
    return { nhaXuatBan };
  }

  async findOne(id: number) {
    const findNhaXuatBan = await this.prisma.nhaXuatBan.findUnique({
      where: { id },
    });
    return { findNhaXuatBan };
  }

  async update(id: number, updateNhaxuatbanDto: UpdateNhaxuatbanDto) {
    const updateNhaXuatBan = await this.prisma.nhaXuatBan.update({
      where: { id },
      data: { ...updateNhaxuatbanDto },
    });
    return { updateNhaXuatBan };
  }

  async remove(id: number) {
    return await this.prisma.nhaXuatBan.delete({
      where: { id },
    });
  }
}
