import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { DeliveryService } from "./delivery.service";
import { DeliveryDto } from "./dto/delivery.dto";

@Controller('api/delivery')
export class DeliveryController{
    constructor(private deliveryService:DeliveryService){}
    @Get('getall')
    getAll(){
        return this.deliveryService.getAlldelivery();
    }

    @Get('getone/:id')
    getOne(@Param('id',ParseIntPipe) id:number){
        return this.deliveryService.getOnedelivery(id);
    }

    @Post('create')
    createdelivery(@Body() delivery:DeliveryDto){
        return this.deliveryService.createdelivery(delivery);
    }

    @Put('update/:id')
    updatedelivery(@Param('id',ParseIntPipe) id:number,@Body() delivery:DeliveryDto){
        return this.deliveryService.updatedeliveryt(id,delivery);
    }

    @Delete('delete/:id')
    deletedelivery(@Param('id') id:number){
        return this.deliveryService.deletedelivery(Number(id));
    }
}