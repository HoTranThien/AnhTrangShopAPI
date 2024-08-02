import { ProductSizeService } from "./product_size.service";
import { ProductSizeDto } from "./dto/product_size.dto";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
@Controller('api/productsize')
export class ProductSizeController{
    constructor(private ProductSizeService:ProductSizeService){}
    @Get('getallof/:id')
    getAllOf(@Param('id',ParseIntPipe) productId:number){
        return this.ProductSizeService.getAllOf(productId);
    }

    @Post('create')
    create(@Body() ProductSize:ProductSizeDto){
        return this.ProductSizeService.create(ProductSize);
    }

    @Delete('delete')
    delete(@Body() ProductSize:ProductSizeDto){
        return this.ProductSizeService.delete(ProductSize);
    }

}