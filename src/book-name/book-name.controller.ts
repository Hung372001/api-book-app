import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { BookNameService } from './book-name.service';
import { BookName as BookNameModel } from '@prisma/client';
import { FileInterceptor } from '@nestjs/platform-express';
const fs = require('fs');

import { Observable, of } from 'rxjs';
import { diskStorage } from 'multer';
import { extname, join } from 'path';

@Controller('book-name')
export class BookNameController {
  constructor(private readonly bookNameService: BookNameService) {}
  @Post('')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  create(
    @Body()
    bookNameData: {
      name: string;
      bookImg: string;
    },
    @UploadedFile() file: Express.Multer.File,
  ): Promise<BookNameModel> {
    const { name, bookImg } = bookNameData;
    return this.bookNameService.create({
      name,
      bookImg: file.filename,
    });
  }
  @Get()
  findAll() {
    return this.bookNameService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookNameService.findOne(+id);
  }
  @Get('catgory:')
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    bookNameData: {
      name: string;
      bookImg: string;
    },
  ): Promise<BookNameModel> {
    const { name, bookImg } = bookNameData;
    return this.bookNameService.update({
      where: { id: Number(id) },
      data: {
        ...bookNameData,
      },
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookNameService.remove(+id);
  }

  @Get('img/:imagename')
  getImg(@Param('imagename') imagename, @Res() res): Observable<Object> {
    console.log(imagename);
    return of(res.sendFile(join(process.cwd(), 'uploads/' + imagename)));
  }
  @Delete('img/:imagename')
  deleteImg(@Param('imagename') imagename) {
    fs.unlink('uploads/' + imagename, (err) => {
      if (err) {
        throw err;
      }
    });
    return { message: 'Xóa thành công' };
  }
}
