import { Module } from '@nestjs/common';
import { NhaCungCapService } from './nha-cung-cap.service';
import { NhaCungCapController } from './nha-cung-cap.controller';

@Module({
  controllers: [NhaCungCapController],
  providers: [NhaCungCapService]
})
export class NhaCungCapModule {}
