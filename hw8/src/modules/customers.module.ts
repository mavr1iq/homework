import { Module } from "@nestjs/common";
import { CustomersController } from "../controllers/customers.controller";
import { CustomersService } from "../services/customers.service";
import { CustomersRepo } from "../database/repositories/customers.repo";
import { OrdersRepo } from "../database/repositories/orders.repo";
import { ProductsRepo } from "../database/repositories/products.repo";

@Module({
  controllers: [CustomersController],
  providers: [
    CustomersService,
    CustomersRepo,
    OrdersRepo,
    ProductsRepo]
})
export class CustomersModule {}