import { HttpException, HttpStatus } from "@nestjs/common";

export class ProductCategoryException extends HttpException {
  constructor() {
    super("Such category does not exists", HttpStatus.FORBIDDEN);
  }
}
