import { PrismaService } from "../PrismaService";
import { UpdateEmployeeDto } from "../../dtos/UpdateEmployeeDto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class EmployeesRepo{
  constructor(private readonly prisma: PrismaService) {}
  async findMany(){
    return this.prisma.employee.findMany({});
  }
  async findUnique(id: number){
    return this.prisma.employee.findUnique({where:{id: id}});
  }
  async updateEmployee(id: number, data: UpdateEmployeeDto){
    return this.prisma.employee.update(
      {where: {id: id},
        data: data});
  }
}