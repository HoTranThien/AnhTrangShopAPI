import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { StatusService } from "./status.service";
import { StatusDto } from "./dto/status.dto";

@Controller('api/status')
export class StatusController{
    constructor(private statusService:StatusService){}
    @Get('getall')
    getAll(){
        return this.statusService.getAll();
    }

    @Get('getone/:id')
    getOne(@Param('id') id:number){
        return this.statusService.getOne(Number(id));
    }

    @Post('create')
    create(@Body() status:StatusDto){
        return this.statusService.create(status);
    }

    @Put('update/:id')
    update(@Param('id') id:number,@Body() status:StatusDto){
        return this.statusService.update(Number(id),status);
    }

    @Delete('delete/:id')
    delete(@Param('id') id:number){
        return this.statusService.delete(Number(id));
    }
}