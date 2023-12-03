import { Module } from "@nestjs/common";
import { EmployeesController } from "../controllers/employees.controller";
import { EmployeesService } from "../services/employees.service";
import { EmployeesRepo } from "../database/repositories/employees.repo";

@Module({
  controllers: [EmployeesController],
  providers: [EmployeesService, EmployeesRepo]
})
export class EmployeesModule{}