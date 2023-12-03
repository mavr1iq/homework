import { HttpException, HttpStatus } from "@nestjs/common";

export class CustomersIdException extends HttpException {
  constructor() {
    super("No customer with such id", HttpStatus.NOT_FOUND);
  }
}
