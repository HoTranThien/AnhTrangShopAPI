import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ColorService } from "./color.service";
import { ColorDto } from "./dto/color.dto";

@Controller('api/color')
export class ColorController{
    constructor(private colorService:ColorService){}
    @Get('getall')
    getAll(){
        return this.colorService.getAllcolor();
    }

    @Get('getone/:id')
    getOne(@Param('id') id:number){
        return this.colorService.getOnecolor(Number(id));
    }

    @Post('create')
    createColor(@Body() color:ColorDto){
        return this.colorService.createcolor(color);
    }

    @Put('update/:id')
    updateColor(@Param('id') id:number,@Body() color:ColorDto){
        return this.colorService.updatecolort(Number(id),color);
    }

    @Delete('delete/:id')
    deleteColor(@Param('id') id:number){
        return this.colorService.deletecolor(Number(id));
    }
}