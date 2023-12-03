import { Controller, Get, Delete, Param } from "@nestjs/common";
import { OrdersService } from '../services/orders.service'
import { OrderIdValidationPipe } from "../pipes/OrderIdValidationPipe";

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {
  }
  @Get()
  findAll() {
    return this.ordersService.findAll();
  }
  @Get(':id')
  findUnique(@Param('id',OrderIdValidationPipe) id: number) {
    return this.ordersService.findUnique(id);
  }
  @Delete(':id')
  delete(@Param('id',OrderIdValidationPipe) id: number){
    return this.ordersService.deleteOrder(id);
  }
}