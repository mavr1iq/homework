import { Controller, Get, Param } from "@nestjs/common";
import { CustomersService } from "../services/customers.service";
import { CustomerIdValidationPipe } from "../pipes/CustomerIdValidationPipe";

@Controller('customers')
export class CustomersController {
  constructor(private readonly service: CustomersService) {
  }
  @Get()
  findMany(){
    return this.service.findMany();
  }
  @Get(':id')
  findUnique(@Param('id', CustomerIdValidationPipe) id: number) {
    return this.service.findUnique(id);
  }
  @Get(':id/orders')
  totalCost(@Param('id', CustomerIdValidationPipe) id: number) {
    return this.service.totalCost(id)
  }
}