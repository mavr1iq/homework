import { Injectable } from "@nestjs/common";
import { CustomersRepo } from "../database/repositories/customers.repo";
import { OrdersRepo } from "../database/repositories/orders.repo";
import { CustomerOrderIdException } from "../exceptions/CustomerOrderIdException";
import { ProductsRepo } from "../database/repositories/products.repo";
import { OrdersIdException } from "../exceptions/OrdersIdException";
import { ProductIdException } from "../exceptions/ProductIdException";

@Injectable()
export class CustomersService {
  constructor(private readonly customerRepo: CustomersRepo,
              private readonly ordersRepo: OrdersRepo,
              private readonly productsRepo: ProductsRepo) {
  }
  async findMany() {
    return this.customerRepo.findMany();
  }
  async findUnique(id: number) {
    return this.customerRepo.findUnique(id);
  }
  async totalCost(id: number) {
    let total = 0;
    const orders = await this.ordersRepo.findByCustomer(id)
    if (!orders.length) {
      throw new CustomerOrderIdException()
    }

    const ordersId = []
    for (const el of orders) {
      const { id, delivery_cost } = el
      total += delivery_cost
      ordersId.push(id)
    }

    const amounts = []
    const productsId = []
    for (const order_id of ordersId) {
      const { order_amount, product_id } = await this.ordersRepo.ordersProductsById(order_id);

      if (!product_id) {
        throw new OrdersIdException()
      }

      amounts.push(order_amount);
      productsId.push(product_id);
    }

    for (const product_id in productsId) {
      const { price } = await this.productsRepo.findUnique(productsId[product_id])

      if (!price) {
        throw new ProductIdException()
      }

      total += amounts[product_id] * price
    }

    return {
      'orders': orders,
      'totalCost': total
    }
  }
}