import { Module } from '@nestjs/common';
import { LoaiSachService } from './loai-sach.service';
import { LoaiSachController } from './loai-sach.controller';

@Module({
  controllers: [LoaiSachController],
  providers: [LoaiSachService]
})
export class LoaiSachModule {}
