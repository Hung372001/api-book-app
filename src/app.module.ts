import { PrismaModule } from './../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TacGiaModule } from './tac-gia/tac-gia.module';
import { NhaxuatbanModule } from './nhaxuatban/nhaxuatban.module';
import { BiaModule } from './bia/bia.module';
import { NhaCungCapModule } from './nha-cung-cap/nha-cung-cap.module';
import { TheLoaiModule } from './the-loai/the-loai.module';
import { LoaiSachModule } from './loai-sach/loai-sach.module';
import { BookModule } from './book/book.module';
import { BookNameModule } from './book-name/book-name.module';
import { ConfigModule } from '@nestjs/config';
import { NgonNguSachModule } from './ngon-ngu-sach/ngon-ngu-sach.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UsersModule,
    TacGiaModule,
    NhaxuatbanModule,
    BiaModule,
    NhaCungCapModule,
    TheLoaiModule,
    LoaiSachModule,
    BookModule,
    BookNameModule,
    ConfigModule.forRoot(),
    NgonNguSachModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
