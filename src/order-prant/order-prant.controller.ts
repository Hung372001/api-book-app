import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { OrderPrantService } from './order-prant.service';
import { ParantOrder, Prisma } from '@prisma/client';
// import { Json } from './interface/interface.json';
var json = [
  {
    name: '',
    soLuong: 0,
    gia: 0,
  },
] as Prisma.JsonArray;
@Controller('order-prant')
export class OrderPrantController {
  constructor(private readonly orderPrantService: OrderPrantService) {}

  @Post('')
  create(
    @Body()
    theLoaiData: {
      nameNguoiNhan: string;
      SoDienThoai: string;
      email: string;
      ThanhPho: string;
      order;
      QuanHuyen: string;
      XaPhuong: string;
      DiaChi: string;
      price: string;
      trangThai: string;
    },
  ): Promise<ParantOrder> {
    const {
      nameNguoiNhan,
      SoDienThoai,
      email,
      ThanhPho,
      order,
      QuanHuyen,
      XaPhuong,
      DiaChi,
      price,
      trangThai,
    } = theLoaiData;
    return this.orderPrantService.create({
      nameNguoiNhan,
      SoDienThoai,
      email,
      ThanhPho,
      order,
      QuanHuyen,
      XaPhuong,
      DiaChi,
      price,
      trangThai: 'Chua Xac Nhan',
    });
  }
  @Get()
  findAll() {
    return this.orderPrantService.findAll();
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    theLoaiData: {
      userName: string;
      nameNguoiNhan: string;
      SoDienThoai: string;
      email: string;
      ThanhPho: string;
      order;
      QuanHuyen: string;
      XaPhuong: string;
      DiaChi: string;
      price: string;
      trangThai: string;
    },
  ): Promise<ParantOrder> {
    const {
      userName,
      nameNguoiNhan,
      SoDienThoai,
      order,
      email,
      ThanhPho,
      QuanHuyen,
      XaPhuong,
      DiaChi,
      price,
      trangThai,
    } = theLoaiData;
    return this.orderPrantService.update({
      where: { id: Number(id) },
      data: {
        ...theLoaiData,
      },
    });
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderPrantService.remove(+id);
  }
  @Delete('')
  removeAll() {
    return this.orderPrantService.removeAll();
  }
}
