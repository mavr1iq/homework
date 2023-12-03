import { HttpException, HttpStatus } from "@nestjs/common";

export class ProductIdException extends HttpException {
  constructor() {
    super("No product with such id", HttpStatus.NOT_FOUND);
  }
}
