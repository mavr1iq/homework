import { Module } from "@nestjs/common";
import { OrdersService } from "../services/orders.service";
import { OrdersController } from "../controllers/orders.controller";
import { OrdersRepo } from "../database/repositories/orders.repo";

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, OrdersRepo]
})
export class OrdersModule {}