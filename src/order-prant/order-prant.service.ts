import { Injectable } from '@nestjs/common';
import { ParantOrder, Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class OrderPrantService {
  constructor(private prisma: PrismaService) {}
  async create(data: Prisma.ParantOrderCreateInput): Promise<ParantOrder> {
    return await this.prisma.parantOrder.create({
      data,
    });
  }
  async findAll() {
    const order = await this.prisma.parantOrder.findMany({
      select: {
        id: true,
        nameNguoiNhan: true,
        SoDienThoai: true,
        email: true,
        order: true,
        ThanhPho: true,
        QuanHuyen: true,
        XaPhuong: true,
        DiaChi: true,
        price: true,
      },
    });
    return { order };
  }
  async getOrderbyEmail(email: string) {
    const order = await this.prisma.parantOrder.findMany({
      where: { email },
      select: {
        id: true,
        nameNguoiNhan: true,
        SoDienThoai: true,
        email: true,
        order: true,
        ThanhPho: true,
        QuanHuyen: true,
        XaPhuong: true,
        DiaChi: true,
        price: true,
      },
    });
    return { order };
  }
  async getOrderbyId(id: number) {
    const order = await this.prisma.parantOrder.findUnique({
      where: { id },
      select: {
        id: true,
        nameNguoiNhan: true,
        SoDienThoai: true,
        email: true,
        order: true,
        ThanhPho: true,
        QuanHuyen: true,
        XaPhuong: true,
        DiaChi: true,
        price: true,
      },
    });
    return { order };
  }

  async update(params: {
    where: Prisma.ParantOrderWhereUniqueInput;
    data: Prisma.ParantOrderUpdateInput;
  }): Promise<ParantOrder> {
    const { data, where } = params;
    return this.prisma.parantOrder.update({
      data,
      where,
    });
  }
  async remove(id: number) {
    return await this.prisma.parantOrder.delete({
      where: { id },
    });
  }
  async removeAll() {
    return await this.prisma.parantOrder.deleteMany({});
  }
}
