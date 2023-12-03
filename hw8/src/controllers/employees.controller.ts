import { Body, Controller, Get, Param, Patch } from "@nestjs/common";
import { UpdateEmployeeDto } from "../dtos/UpdateEmployeeDto";
import { EmployeesService } from "../services/employees.service";
import { EmployeeIdValidationPipe } from "../pipes/EmployeeIdValidationPipe";

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}
  @Get()
  findMany() {
    return this.employeesService.findMany();
  }
  @Get(':id')
  findUnique(@Param('id', EmployeeIdValidationPipe) id: number){
    return this.employeesService.findUnique(id);
  }
  @Patch(':id')
  update(@Param('id', EmployeeIdValidationPipe) id: number,
         @Body() updateEmployeeDto: UpdateEmployeeDto){
    return this.employeesService.updateEmployee(id, updateEmployeeDto)
  }
}