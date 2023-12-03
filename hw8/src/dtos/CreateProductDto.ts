import { IsEnum, IsNumber, IsString } from "class-validator";
import { Category } from "@prisma/client";
import { ProductCategoryException } from "../exceptions/ProductCategoryException";

export class CreateProductDto {
  @IsString()
  name: string;
  @IsNumber()
  amount: number;
  @IsNumber()
  price: number;
  @IsEnum(Category, new ProductCategoryException)
  category: Category
}