import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book as BookModel } from '@prisma/client';
import { LoaiSach } from 'src/loai-sach/entities/loai-sach.entity';
import { TheLoai } from 'src/the-loai/entities/the-loai.entity';
import { fillterTest } from './dto/filter-book-price.dto';
import { Req, Res } from '@nestjs/common/decorators';
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
      isHot: boolean;
      isHotSearch: boolean;
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
      isHot,
      isHotSearch,
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
      isHot: false,
      isHotSearch: false,
    });
  }
  @Post('test/page=:page')
  findTest(@Body() dtoFilter: fillterTest, @Param('page') page: number) {
    return this.bookService.findMuti(dtoFilter, page);
  }
  @Post('search/:search/page=:page')
  searchBook(
    @Body() dtoFilter: fillterTest,
    @Param('search') search: string,
    @Param('page') page: number,
  ) {
    return this.bookService.searchBook(dtoFilter, search, page);
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

  @Get('fillterPrice/:min&:max/page=:page')
  getBookPrice(
    @Param('min') min: number,
    @Param('max') max: number,
    @Param('page') page: number,
  ) {
    return this.bookService.getBookPrice(min, max, page);
  }
  @Get('fillterPrice/:loaiSach')
  findLoaiSach(@Param('loaiSach') max: string) {
    return this.bookService.findLoaiSach(max);
  }

  @Get('get/:min&:max&:loaisach&:theloai/page=:page')
  getBookCateAndPrice(
    @Param('min') min: number,
    @Param('max') max: number,
    @Param('loaisach') LoaiSach: string,
    @Param('theloai') TheLoai: string,
    @Param('page') page: number,
  ) {
    return this.bookService.getBookCateAndPrice(
      min,
      max,
      LoaiSach,
      TheLoai,
      page,
    );
  }

  @Get('fillter/:min&:max&:loaiSach/page=:page')
  getBookCate(
    @Param('min') min: number,
    @Param('max') max: number,
    @Param('loaiSach') LoaiSach: string,
    @Param('page') page: number,
  ) {
    return this.bookService.getBookCate(min, max, LoaiSach, page);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    bookNameData: {
      isHotSearch: boolean;
      isHot: boolean;
    },
  ): Promise<BookModel> {
    const { isHotSearch, isHot } = bookNameData;
    return this.bookService.update({
      where: { id: Number(id) },
      data: {
        ...bookNameData,
      },
    });
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.bookService.remove(+id);
  }
  @Delete('')
  removeAll() {
    return this.bookService.removeAll();
  }
}
