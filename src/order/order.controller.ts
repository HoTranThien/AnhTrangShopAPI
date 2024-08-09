import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { OrderService } from "./order.service";
import { OrderDto, Status, UpdateOrderDto } from "./dto/order.dto";

@Controller('api/order')
export class OrderController{
    constructor(private OrderService:OrderService){}
    @Get('getall')
    getAll(){
        return this.OrderService.getAllOrder();
    }

    @Get('getone/:id')
    getOne(@Param('id',ParseIntPipe) id:number){
        return this.OrderService.getOneOrder(Number(id));
    }

    @Post('create')
    createOrder(@Body() Order:OrderDto){
        return this.OrderService.createOrder(Order);
    }

    @Put('update/:id')
    updateOrder(@Param('id',ParseIntPipe) id:number,@Body() Order:UpdateOrderDto){
        return this.OrderService.updateOrder(Number(id),Order);
    }
    @Put('updatestatus/:id')
    updateStatus(@Param('id',ParseIntPipe) id:number,@Body() status:Status){
        return this.OrderService.updateStatus(Number(id),status);
    }

    @Delete('delete/:id')
    deleteOrder(@Param('id',ParseIntPipe) id:number){
        return this.OrderService.deleteOrder(Number(id));
    }
    @Get('status')
    getStatus(){
        return this.OrderService.getStatus();
    }
}