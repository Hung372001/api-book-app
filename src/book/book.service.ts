import { Injectable } from '@nestjs/common';
import { Book, Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { MoreThan } from 'typeorm';
import { FilterBookPriceDto } from './dto/filter-book-price.dto';
@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}
  async create(data: Prisma.BookCreateInput): Promise<Book> {
    return await this.prisma.book.create({
      data,
    });
  }
  async findAll() {
    const book = await this.prisma.book.findMany({
      select: {
        bookName: true,
        theLoai: true,
        tacGia: true,
        bia: true,
        loaiSach: true,
        nhaCungCap: true,
        gia: true,
      },
    });
    return { book };
  }
  async findOne(id: number) {
    const findBookName = await this.prisma.book.findUnique({
      where: { id },
      select: {
        bookName: true,
        theLoai: true,
        tacGia: true,
        bia: true,
        loaiSach: true,
        nhaCungCap: true,
        gia: true,
      },
    });
    return { findBookName };
  }
  async findCategory(TheLoaiName: string) {
    const findBookName = await this.prisma.book.findMany({
      where: { TheLoaiName },
      select: {
        bookName: true,
        theLoai: true,
        tacGia: true,
        bia: true,
        loaiSach: true,
        nhaCungCap: true,
        gia: true,
      },
    });
    return { findBookName };
  }
  async findLoaiSach(loaiSachName: string) {
    const findBookName = await this.prisma.book.findMany({
      where: { loaiSachName },
      select: {
        bookName: true,
        theLoai: true,
        tacGia: true,
        bia: true,
        loaiSach: true,
        nhaCungCap: true,
        gia: true,
      },
    });
    return { findBookName };
  }
  async findLoaiSachTheLoai(loaiSachName: string, TheLoaiName: string) {
    const findBookName = await this.prisma.book.findMany({
      where: { loaiSachName, TheLoaiName },
      select: {
        bookName: true,
        theLoai: true,
        tacGia: true,
        bia: true,
        loaiSach: true,
        nhaCungCap: true,
        gia: true,
      },
    });
    return { findBookName };
  }
  async findTacGia(tacGiaName: string) {
    const findBookName = await this.prisma.book.findMany({
      where: { tacGiaName },
      select: {
        bookName: true,
        theLoai: true,
        tacGia: true,
        bia: true,
        loaiSach: true,
        nhaCungCap: true,
        gia: true,
      },
    });
    return { findBookName };
  }
  async findNhaXuatBan(nhaXuatBanName: string) {
    const findBookName = await this.prisma.book.findMany({
      where: { nhaXuatBanName },
      select: {
        bookName: true,
        theLoai: true,
        tacGia: true,
        bia: true,
        loaiSach: true,
        nhaCungCap: true,
        gia: true,
      },
    });
    return { findBookName };
  }
  async getBookPrice(min: number, max: number) {
    const findBookName = await this.prisma.book.findMany({
      where: {
        gia: {
          gte: Number(min),
          lte: Number(max),
        },
      },
      select: {
        bookName: true,
        theLoai: true,
        tacGia: true,
        bia: true,
        loaiSach: true,
        nhaCungCap: true,
        gia: true,
      },
    });
    return { findBookName };
  }
  async getBookCate(
    min: number,
    max: number,
    nhaXuatBanName: string,
    tacGiaName: string,
    TheLoaiName: string,
    loaiSachName: string,
  ) {
    const findBookName = await this.prisma.book.findMany({
      where: {
        nhaXuatBanName,
        tacGiaName,
        TheLoaiName,
        loaiSachName,

        gia: {
          gte: Number(min),
          lte: Number(max),
        },
      },
      select: {
        bookName: true,
        theLoai: true,
        tacGia: true,
        bia: true,
        loaiSach: true,
        nhaCungCap: true,
        gia: true,
      },
    });
    return { findBookName };
  }
  async update(params: {
    where: Prisma.BookWhereUniqueInput;
    data: Prisma.BookUpdateInput;
  }): Promise<Book> {
    const { data, where } = params;
    return this.prisma.book.update({
      data,
      where,
    });
  }
  async remove(id: number) {
    return await this.prisma.book.delete({
      where: { id },
    });
  }
}
