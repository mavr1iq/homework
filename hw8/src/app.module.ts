import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductsModule } from "./modules/products.module";
import { PrismaModule } from "./database/PrismaModules";
import { OrdersModule } from "./modules/orders.module";
import { EmployeesModule } from "./modules/employees.module";
import { CustomersModule } from "./modules/customers.module";

@Module({
  imports: [
    ProductsModule,
    PrismaModule,
    OrdersModule,
    EmployeesModule,
    CustomersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
