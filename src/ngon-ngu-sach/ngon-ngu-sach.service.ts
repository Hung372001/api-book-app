import { Injectable } from '@nestjs/common';
import { NgonNguSach, Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class NgonNguSachService {
  constructor(private prisma: PrismaService) {}
  async create(data: Prisma.NgonNguSachCreateInput): Promise<NgonNguSach> {
    return await this.prisma.ngonNguSach.create({
      data,
    });
  }
  async findAll() {
    const ngonNguSach = await this.prisma.ngonNguSach.findMany({
      select: {
        id: true,
        name: true,
        loaiSach: true,
        TheLoai: true,
        Book: true,
      },
    });
    return { ngonNguSach };
  }
  async findOne(id: number) {
    const findNgonNguSach = await this.prisma.ngonNguSach.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        loaiSach: true,
        TheLoai: true,
        Book: true,
      },
    });
    return { findNgonNguSach };
  }
}
