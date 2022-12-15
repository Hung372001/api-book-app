import { Module } from '@nestjs/common';
import { BiaService } from './bia.service';
import { BiaController } from './bia.controller';

@Module({
  controllers: [BiaController],
  providers: [BiaService]
})
export class BiaModule {}
