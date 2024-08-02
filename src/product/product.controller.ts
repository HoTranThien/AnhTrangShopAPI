import { Controller, ParseIntPipe, UploadedFiles } from "@nestjs/common";
import { ProductService } from "./product.service";
import { Body, Delete, Get, Param, Post, Put ,UseInterceptors} from "@nestjs/common";
import { ProductDto, UpdateProductDto } from "./dto/product.dto";
import { AnyFilesInterceptor } from "@nestjs/platform-express";
import { Multer } from "multer";

@Controller('api/product')
export class ProductController{
    constructor(private ProductService:ProductService){}
    @Get('getall')
    getAll(){
        return this.ProductService.getAllProduct();
    }

    @Get('getone/:id')
    getOne(@Param('id') id:number){
        return this.ProductService.getOneProduct(Number(id));
    }

    @Post('create')
    @UseInterceptors(AnyFilesInterceptor())
    createProduct(@Body() Product:ProductDto,@UploadedFiles()imgs:Express.Multer.File[]){
        return this.ProductService.createProduct(Product,imgs);
    }

    @Put('update/:id')
    @UseInterceptors(AnyFilesInterceptor())
    updateProduct(@Param('id',ParseIntPipe) id:number,@Body() Product:UpdateProductDto,
                @UploadedFiles()imgs:Express.Multer.File[]){
        return this.ProductService.updateProduct(Number(id),Product,imgs);
    }

    @Delete('delete/:id')
    deleteProduct(@Param('id') id:number){
        return this.ProductService.deleteProduct(Number(id));
    }
}