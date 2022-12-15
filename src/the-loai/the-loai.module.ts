import { Module } from '@nestjs/common';
import { TheLoaiService } from './the-loai.service';
import { TheLoaiController } from './the-loai.controller';

@Module({
  controllers: [TheLoaiController],
  providers: [TheLoaiService]
})
export class TheLoaiModule {}
