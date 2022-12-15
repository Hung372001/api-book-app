import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateNhaCungCapDto } from './dto/create-nha-cung-cap.dto';
import { UpdateNhaCungCapDto } from './dto/update-nha-cung-cap.dto';

@Injectable()
export class NhaCungCapService {
  constructor(private prisma: PrismaService) {}
  async create(createNhaCungCapDto: CreateNhaCungCapDto) {
    const { name } = createNhaCungCapDto;
    await this.prisma.nhaCungCap.create({
      data: {
        name,
      },
    });
    return { message: 'tao thanh cong' };
  }

  async findAll() {
    const nhaCungCap = await this.prisma.nhaCungCap.findMany({
      select: { id: true, name: true },
    });
    return { nhaCungCap };
  }

  async findOne(id: number) {
    const findnhaCungCap = await this.prisma.nhaCungCap.findUnique({
      where: { id },
    });
    return { findnhaCungCap };
  }

  async update(id: number, updateNhaCungCapDto: UpdateNhaCungCapDto) {
    const updateNhaCungCap = await this.prisma.nhaCungCap.update({
      where: { id },
      data: { ...updateNhaCungCapDto },
    });
    return { updateNhaCungCap };
  }

  async remove(id: number) {
    return await this.prisma.nhaCungCap.delete({
      where: { id },
    });
  }
}
