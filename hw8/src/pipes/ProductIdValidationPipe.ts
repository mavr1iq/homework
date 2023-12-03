import { Injectable, PipeTransform } from "@nestjs/common";
import { ProductIdException } from "../exceptions/ProductIdException";
import { ProductsRepo } from "../database/repositories/products.repo";

@Injectable()
export class ProductIdValidationPipe implements PipeTransform<number, Promise<number>> {
  constructor(private readonly repo: ProductsRepo) {
  }
  async transform(id: number): Promise<number> {
    try {
      id = +id
    } catch (e) {
      throw new ProductIdException();
    }

    const check = await this.repo.findUnique(id)
    if (!check) {
      throw new ProductIdException();
    }
    return id
  }
}