import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { SizeService } from "./size.service";
import { SizeDto } from "./dto/size.dto";

@Controller('api/size')
export class SizeController{
    constructor(private SizeService:SizeService){}
    @Get('getall')
    getAll(){
        return this.SizeService.getAllSize();
    }

    @Get('getone/:id')
    getOne(@Param('id') id:number){
        return this.SizeService.getOneSize(Number(id));
    }

    @Post('create')
    createSize(@Body() Size:SizeDto){
        return this.SizeService.createSize(Size);
    }

    @Put('update/:id')
    updateSize(@Param('id') id:number,@Body() Size:SizeDto){
        return this.SizeService.updateSizet(Number(id),Size);
    }

    @Delete('delete/:id')
    deleteSize(@Param('id') id:number){
        return this.SizeService.deleteSize(Number(id));
    }
}