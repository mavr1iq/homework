import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "../dtos/CreateProductDto";
import { ProductsRepo } from "../database/repositories/products.repo";

@Injectable()
export class ProductsService {
  constructor(private readonly repo: ProductsRepo) {}
  async findAll() {
    return this.repo.findAll();
  }
  async findUnique(id: number) {
    return this.repo.findUnique(id);
  }
  async createProduct(createProductDto: CreateProductDto){
    return this.repo.createProduct(createProductDto)
  }
}
