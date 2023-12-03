import { UpdateEmployeeDto } from "../dtos/UpdateEmployeeDto";
import { Injectable } from "@nestjs/common";
import { EmployeesRepo } from "../database/repositories/employees.repo";

@Injectable()
export class EmployeesService{
  constructor(private readonly repo: EmployeesRepo) {}
  async findMany(){
    return this.repo.findMany();
  }
  async findUnique(id: number){
    return this.repo.findUnique(id);
  }
  async updateEmployee(id: number, data: UpdateEmployeeDto) {
    return this.repo.updateEmployee(id, data)
  }
}