import { Injectable } from "@nestjs/common";
import { PrismaService } from "../PrismaService";

@Injectable()
export class OrdersRepo {
  constructor(private readonly prisma: PrismaService){}

  async findAll() {
    return this.prisma.orders.findMany({})
  }
  async findUnique(id: number){
    return this.prisma.orders.findUnique({where: {id: id, deleted: false}})
  }
  async deleteOrder(id: number){
    return this.prisma.orders.delete({where: {id: id}})
  }
  async findByCustomer(id: number) {
    return this.prisma.orders.findMany({where: {customer_id: id}})
  }
  async ordersProductsById(id: number) {
    return this.prisma.ordersProducts.findUnique({where:{order_id:id}})
  }
}