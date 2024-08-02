import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ProductColorService } from "./product_color.service";
import { ProductColorDto } from "./dto/product_color.dto";

@Controller('api/productcolor')
export class ProductColorController{
    constructor(private ProductColorService:ProductColorService){}
    @Get('getallof/:id')
    getAllOf(@Param('id',ParseIntPipe) productId:number){
        return this.ProductColorService.getAllOf(productId);
    }

    @Post('create')
    create(@Body() ProductColor:ProductColorDto){
        return this.ProductColorService.create(ProductColor);
    }

    @Delete('delete')
    delete(@Body() ProductColor:ProductColorDto){
        return this.ProductColorService.delete(ProductColor);
    }

}