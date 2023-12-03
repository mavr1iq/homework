import { HttpException, HttpStatus } from "@nestjs/common";

export class OrdersIdException extends HttpException {
  constructor() {
    super("No order with such id or it was deleted", HttpStatus.NOT_FOUND);
  }
}
