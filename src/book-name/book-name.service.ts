import { Injectable } from '@nestjs/common';

import { PrismaService } from 'prisma/prisma.service';

import { Prisma, BookName } from '@prisma/client';
const fs = require('fs');

@Injectable()
export class BookNameService {
  constructor(private prisma: PrismaService) {}
  async create(data: Prisma.BookNameCreateInput): Promise<BookName> {
    return await this.prisma.bookName.create({
      data,
    });
  }
  async findAll() {
    const bookName = await this.prisma.bookName.findMany({
      select: { id: true, name: true, bookImg: true, book: true },
    });
    return { bookName };
  }
  async findOne(id: number) {
    const findBookName = await this.prisma.bookName.findUnique({
      where: { id },
      select: { id: true, name: true, bookImg: true, book: true },
    });
    return { findBookName };
  }
  // async findOneCategory(category: string) {
  //   const findBookName = await this.prisma.bookName.findUnique({
  //     where: { book.category },
  //     select: { id: true, name: true, bookImg: true, book: true },
  //   });
  //   return { findBookName };
  // }
  async update(params: {
    where: Prisma.BookNameWhereUniqueInput;
    data: Prisma.BookNameUpdateInput;
  }): Promise<BookName> {
    const { data, where } = params;
    return this.prisma.bookName.update({
      data,
      where,
    });
  }
  async remove(id: number) {
    return await this.prisma.bookName.delete({
      where: { id },
    });
  }
  removeImg(directoryPath: string, fileName: string) {
    fs.unlink(directoryPath + fileName, (err) => {
      if (err) {
        throw err;
      }
    });
    return { messeage: 'Xoa Thanh Cong' };
  }
}
