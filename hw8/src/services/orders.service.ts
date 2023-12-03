import { Injectable } from "@nestjs/common";
import { OrdersRepo } from "../database/repositories/orders.repo";

@Injectable()
export class OrdersService {
  constructor(private readonly repo: OrdersRepo){}

  async findAll() {
    return this.repo.findAll();
  }
  async findUnique(id: number){
    return this.repo.findUnique(id);
  }
  async deleteOrder(id: number){
    return this.repo.deleteOrder(id);
  }
}