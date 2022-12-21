import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

import { TheLoai, Prisma } from '@prisma/client';

@Injectable()
export class TheLoaiService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.TheLoaiCreateInput): Promise<TheLoai> {
    return await this.prisma.theLoai.create({
      data,
    });
  }

  async findAll() {
    const theLoai = await this.prisma.theLoai.findMany({
      select: { id: true, name: true, loaiSach: true, book: true },
    });
    return { theLoai };
  }
  async findPagination(page: number) {
    const theLoai = await this.prisma.theLoai.findMany({
      take: 3,
      skip: (page - 1) * 3,
      select: { id: true, name: true, loaiSach: true, book: true },
    });
    return { theLoai };
  }
  async findOne(id: number) {
    const findtheLoai = await this.prisma.theLoai.findUnique({
      where: { id },
      select: { id: true, name: true, loaiSach: true, book: true },
    });
    return { findtheLoai };
  }

  async update(params: {
    where: Prisma.TheLoaiWhereUniqueInput;
    data: Prisma.TheLoaiUpdateInput;
  }): Promise<TheLoai> {
    const { data, where } = params;
    return this.prisma.theLoai.update({
      data,
      where,
    });
  }

  async remove(id: number) {
    return await this.prisma.theLoai.delete({
      where: { id },
    });
  }
}
