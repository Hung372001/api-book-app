import { Module } from '@nestjs/common';
import { OrderPrantService } from './order-prant.service';
import { OrderPrantController } from './order-prant.controller';

@Module({
  controllers: [OrderPrantController],
  providers: [OrderPrantService]
})
export class OrderPrantModule {}
