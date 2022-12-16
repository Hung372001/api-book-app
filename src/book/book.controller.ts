import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { Book as BookModel } from '@prisma/client';
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}
  @Post('')
  create(
    @Body()
    theLoaiData: {
      nameBook: string;
      theLoainame: string;
      tacGianame: string;
      bianame: string;
      loaiSachname: string;
      nhaXuatBanname: string;
      nhaCungCapname: string;
      gia: number;
    },
  ): Promise<BookModel> {
    const {
      nameBook,
      theLoainame,
      tacGianame,
      bianame,
      loaiSachname,
      nhaXuatBanname,
      nhaCungCapname,
      gia,
    } = theLoaiData;
    return this.bookService.create({
      bookName: {
        connect: {
          name: nameBook,
        },
      },
      theLoai: {
        connect: {
          name: theLoainame,
        },
      },
      tacGia: {
        connect: {
          name: tacGianame,
        },
      },
      bia: {
        connect: {
          name: bianame,
        },
      },
      loaiSach: {
        connect: {
          name: loaiSachname,
        },
      },
      nhaXuatBan: {
        connect: {
          name: nhaXuatBanname,
        },
      },
      nhaCungCap: {
        connect: {
          name: nhaCungCapname,
        },
      },
      gia,
    });
  }
  @Get()
  findAll() {
    return this.bookService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(+id);
  }
  @Get('category/:category')
  findCategory(@Param('category') category: string) {
    return this.bookService.findCategory(category);
  }
  @Get('tac-gia/:tacgia')
  findTacGia(@Param('tacgia') category: string) {
    return this.bookService.findTacGia(category);
  }
  @Get('nha-xuat-ban/:nxp')
  findNhaXuatBan(@Param('nxp') category: string) {
    return this.bookService.findNhaXuatBan(category);
  }
  @Get('fillterPrice/:min&:max')
  getBookPrice(@Param('min') min: number, @Param('max') max: number) {
    return this.bookService.getBookPrice(min, max);
  }
  @Get('fillterPrice/:loaiSach')
  findLoaiSach(@Param('loaiSach') max: string) {
    return this.bookService.findLoaiSach(max);
  }

  @Get('fillter/:min&:max&:nxp&:tacgia&:category&:loaiSach')
  getBookCate(
    @Param('min') min: number,
    @Param('max') max: number,
    @Param('nxp') nxp: string,
    @Param('tacgia') tacGia: string,
    @Param('category') category: string,
    @Param('loaiSach') LoaiSach: string,
  ) {
    if (tacGia == ' ') {
      console.log(123);
    }

    return this.bookService.getBookCate(
      min,
      max,
      nxp,
      tacGia,
      category,
      LoaiSach,
    );
  }
}
