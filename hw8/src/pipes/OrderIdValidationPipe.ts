import { Injectable, PipeTransform } from "@nestjs/common";
import { OrdersIdException } from "../exceptions/OrdersIdException";
import { OrdersRepo } from "../database/repositories/orders.repo";

@Injectable()
export class OrderIdValidationPipe implements PipeTransform<number, Promise<number>> {
  constructor(private readonly repo: OrdersRepo) {
  }
  async transform(id: number): Promise<number> {
    try {
      id = +id
    } catch (e) {
      throw new OrdersIdException()
    }

    const check = await this.repo.findUnique(id);
    if (!check){
      throw new OrdersIdException()
    }
    return id
  }
}