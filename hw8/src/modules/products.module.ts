import { Module } from "@nestjs/common";
import { ProductsService } from "../services/products.service";
import { ProductsController } from "../controllers/products.controller";
import { ProductsRepo } from "../database/repositories/products.repo";

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, ProductsRepo],
})
export class ProductsModule {}
