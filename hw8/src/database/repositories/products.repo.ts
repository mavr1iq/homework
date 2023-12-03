import { Injectable } from "@nestjs/common";
import { PrismaService } from "../PrismaService";
import { CreateProductDto } from "../../dtos/CreateProductDto";

@Injectable()
export class ProductsRepo {
  constructor(private readonly prisma: PrismaService) {}
  async findAll() {
    return this.prisma.products.findMany({});
  }
  async findUnique(id: number) {
    return this.prisma.products.findUnique({where: {id: id}})
  }
  async createProduct(createProductDto: CreateProductDto){
    return this.prisma.products.create({data: createProductDto})
  }
}
