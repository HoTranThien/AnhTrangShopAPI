import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Children_categoryService } from "./children_category.service";
import { Children_categoryDto } from "./dto/children_category.dto";

@Controller('api/children_category')
export class Children_categoryController{
    constructor(private Children_categoryService:Children_categoryService){}
    @Get('getall')
    getAll(){
        return this.Children_categoryService.getAllChildren_category();
    }

    @Get('getone/:id')
    getOne(@Param('id') id:number){
        return this.Children_categoryService.getOneChildren_category(Number(id));
    }

    @Post('create')
    createChildren_category(@Body() Children_category:Children_categoryDto){
        return this.Children_categoryService.createChildren_category(Children_category);
    }

    @Put('update/:id')
    updateChildren_category(@Param('id') id:number,@Body() Children_category:Children_categoryDto){
        return this.Children_categoryService.updateChildren_categoryt(Number(id),Children_category);
    }

    @Delete('delete/:id')
    deleteChildren_category(@Param('id') id:number){
        return this.Children_categoryService.deleteChildren_category(Number(id));
    }
}