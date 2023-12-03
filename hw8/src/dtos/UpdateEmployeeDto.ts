import { IsOptional, IsString } from "class-validator";

export class UpdateEmployeeDto {
  @IsString()
  first_name: string
  @IsOptional()
  @IsString()
  middle_name: string
  @IsString()
  last_name: string
  @IsString()
  position: string
}