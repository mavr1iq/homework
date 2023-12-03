import { PrismaService } from "../PrismaService";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CustomersRepo {
  constructor(private readonly prisma: PrismaService) {
  }
  async findMany() {
    return this.prisma.customer.findMany({})
  }
  async findUnique(id: number) {
    return this.prisma.customer.findUnique({where: {id:id}})
  }
}