import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { ProductsService } from "../services/products.service";
import { CreateProductDto } from "../dtos/CreateProductDto";
import { ProductIdValidationPipe } from "../pipes/ProductIdValidationPipe";

@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(":id")
  findUnique(@Param("id", ProductIdValidationPipe) id: number) {
    return this.productsService.findUnique(id);
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.createProduct(createProductDto);
  }
}