import { ProductImgService } from "./product_img.service";
import { ProductImgDto } from "./dto/product_img.dto";
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";

@Controller()
export class ProductImgController{
    constructor(private ProductImgService:ProductImgService){}

    @Get('getallof/:id')
    getAllOf(@Param('id',ParseIntPipe) productId:number){
        return this.ProductImgService.getAllOf(productId);
    }

    @Post('create')
    create(@Body() ProductImg:ProductImgDto){
        return this.ProductImgService.create(ProductImg);
    }

    @Delete('delete')
    delete(@Body() ProductImg:ProductImgDto){
        return this.ProductImgService.delete(ProductImg);
    }
}