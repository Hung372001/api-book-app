import { Injectable } from '@nestjs/common';
import { Prisma, LoaiSach } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { CreateLoaiSachDto } from './dto/create-loai-sach.dto';
import { UpdateLoaiSachDto } from './dto/update-loai-sach.dto';

@Injectable()
export class LoaiSachService {
  constructor(private prisma: PrismaService) {}
  async create(data: Prisma.LoaiSachCreateInput): Promise<LoaiSach> {
    return await this.prisma.loaiSach.create({
      data,
    });
  }

  async findAll() {
    const loaiSach = await this.prisma.loaiSach.findMany({
      select: {
        id: true,
        name: true,
        NgonNguSach: true,
        theLoai: true,
        book: true,
      },
    });
    return { loaiSach };
  }

  async findOne(id: number) {
    const findloaiSach = await this.prisma.loaiSach.findUnique({
      where: { id },
      select: { id: true, name: true, theLoai: true, book: true },
    });
    return { findloaiSach };
  }

  async update(id: number, updateLoaiSachDto: UpdateLoaiSachDto) {
    const updateLoaiSach = await this.prisma.loaiSach.update({
      where: { id },
      data: { ...updateLoaiSachDto },
    });
    return { updateLoaiSach };
  }

  async remove(id: number) {
    return await this.prisma.loaiSach.delete({
      where: { id },
    });
  }
}
