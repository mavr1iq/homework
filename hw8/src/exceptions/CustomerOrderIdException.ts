import { HttpException, HttpStatus } from "@nestjs/common";

export class CustomerOrderIdException extends HttpException {
  constructor() {
    super("No order with such customer id", HttpStatus.NOT_FOUND);
  }
}
