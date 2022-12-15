import { Module } from '@nestjs/common';
import { NhaxuatbanService } from './nhaxuatban.service';
import { NhaxuatbanController } from './nhaxuatban.controller';

@Module({
  controllers: [NhaxuatbanController],
  providers: [NhaxuatbanService]
})
export class NhaxuatbanModule {}
