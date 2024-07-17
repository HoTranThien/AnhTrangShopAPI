import { Body, Controller, Delete, Get, Header, Post, Put } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductDTO } from "./dto";

@Controller('api/product')

export class ProductController {
    constructor(private productService:ProductService){}
    @Get('getall')
    getAll(){
        return this.productService.getAll();
    }

    @Get('getone/:id')
    getOne(){
        return this.productService.getOne();
    }

    @Post('create')
    createProduct(@Body() product:ProductDTO){
        return this.productService.createProduct(product);
    }

    @Put('update/:id')
    updateProduct(){
        return this.productService.updateProduct();
    }

    @Delete('delete/:id')
    deleteProduct(){
        return this.productService.deleteProduct();
    }
}