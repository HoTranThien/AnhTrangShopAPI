import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ProductOrderService } from "./product_order.service";
import { ProductOrderDto } from "./dto/product_order.dto";

@Controller('api/productorder')
export class ProductOrderController{
    constructor(private ProductOrderService:ProductOrderService){}
    @Get('getallof/:id')
    getAllOf(@Param('id',ParseIntPipe) productId:number){
        return this.ProductOrderService.getAllOf(productId);
    }

    @Post('create')
    create(@Body() ProductOrder:ProductOrderDto){
        return this.ProductOrderService.create(ProductOrder);
    }

    @Delete('delete')
    delete(@Body() ProductOrder:ProductOrderDto){
        return this.ProductOrderService.delete(ProductOrder);
    }

}