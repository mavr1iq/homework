import { Injectable, PipeTransform } from "@nestjs/common";
import { EmployeesIdException } from "../exceptions/EmployeesIdException";
import { EmployeesRepo } from "../database/repositories/employees.repo";

@Injectable()
export class EmployeeIdValidationPipe implements PipeTransform<number, Promise<number>> {
  constructor(private readonly repo: EmployeesRepo) {
  }

  async transform(id: number): Promise<number> {
    try {
      id = +id
    } catch (e) {
      throw new EmployeesIdException();
    }

    const check = await this.repo.findUnique(id)
    if(!check) {
      throw new EmployeesIdException();
    }
    return id
  }
}