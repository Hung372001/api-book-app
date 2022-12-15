import { Module } from '@nestjs/common';
import { NgonNguSachService } from './ngon-ngu-sach.service';
import { NgonNguSachController } from './ngon-ngu-sach.controller';

@Module({
  controllers: [NgonNguSachController],
  providers: [NgonNguSachService]
})
export class NgonNguSachModule {}
