import { Injectable, PipeTransform } from "@nestjs/common";
import { CustomersRepo } from "../database/repositories/customers.repo";
import { CustomersIdException } from "../exceptions/CustomersIdException";

@Injectable()
export class CustomerIdValidationPipe implements PipeTransform<number, Promise<number>> {
  constructor(private readonly repo: CustomersRepo) {
  }

  async transform(id: number): Promise<number> {
    try {
      id = +id
    } catch (e) {
      throw new CustomersIdException()
    }

    const check = await this.repo.findUnique(id)
    if(!check) {
      throw new CustomersIdException()
    }
    return id
  }
}