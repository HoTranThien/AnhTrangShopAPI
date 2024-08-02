import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { OrderService } from "./order.service";
import { OrderDto } from "./dto/order.dto";

@Controller('api/order')
export class OrderController{
    constructor(private OrderService:OrderService){}
    @Get('getall')
    getAll(){
        return this.OrderService.getAllOrder();
    }

    @Get('getone/:id')
    getOne(@Param('id') id:number){
        return this.OrderService.getOneOrder(Number(id));
    }

    @Post('create')
    createOrder(@Body() Order:OrderDto){
        return this.OrderService.createOrder(Order);
    }

    @Put('update/:id')
    updateOrder(@Param('id') id:number,@Body() Order:OrderDto){
        return this.OrderService.updateOrdert(Number(id),Order);
    }

    @Delete('delete/:id')
    deleteOrder(@Param('id') id:number){
        return this.OrderService.deleteOrder(Number(id));
    }
}