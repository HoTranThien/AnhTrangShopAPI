import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Img_productService } from "./img_product.service";
import { Img_productDto } from "./dto/img_product.dto";

@Controller('api/img_product')
export class Img_productController{
    constructor(private Img_productService:Img_productService){}
    @Get('getall')
    getAll(){
        return this.Img_productService.getAllImg_product();
    }

    @Get('getone/:id')
    getOne(@Param('id') id:number){
        return this.Img_productService.getOneImg_product(Number(id));
    }

    @Post('create')
    createImg_product(@Body() Img_product:Img_productDto){
        return this.Img_productService.createImg_product(Img_product);
    }

    @Put('update/:id')
    updateImg_product(@Param('id') id:number,@Body() Img_product:Img_productDto){
        return this.Img_productService.updateImg_productt(Number(id),Img_product);
    }

    @Delete('delete/:id')
    deleteImg_product(@Param('id') id:number){
        return this.Img_productService.deleteImg_product(Number(id));
    }
}