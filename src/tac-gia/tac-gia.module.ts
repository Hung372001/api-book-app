import { Module } from '@nestjs/common';
import { TacGiaService } from './tac-gia.service';
import { TacGiaController } from './tac-gia.controller';

@Module({
  controllers: [TacGiaController],
  providers: [TacGiaService]
})
export class TacGiaModule {}
