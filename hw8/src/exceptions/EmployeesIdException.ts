import { HttpException, HttpStatus } from "@nestjs/common";

export class EmployeesIdException extends HttpException {
  constructor() {
    super("No employee with such id", HttpStatus.NOT_FOUND);
  }
}
