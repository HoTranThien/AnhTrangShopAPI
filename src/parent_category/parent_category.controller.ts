import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Parent_categoryService } from "./parent_category.service";
import { Parent_categoryDto } from "./dto/parent_category.dto";

@Controller('api/parent_category')
export class Parent_categoryController{
    constructor(private Parent_categoryService:Parent_categoryService){}
    @Get('getall')
    getAll(){
        return this.Parent_categoryService.getAllParent_category();
    }

    @Get('getallwithchildren')
    getAllWithChildren(){
        return this.Parent_categoryService.getAllWithChildren();
    }

    @Get('getone/:id')
    getOne(@Param('id') id:number){
        return this.Parent_categoryService.getOneParent_category(Number(id));
    }

    @Post('create')
    createParent_category(@Body() Parent_category:Parent_categoryDto){
        return this.Parent_categoryService.createParent_category(Parent_category);
    }

    @Put('update/:id')
    updateParent_category(@Param('id') id:number,@Body() Parent_category:Parent_categoryDto){
        return this.Parent_categoryService.updateParent_categoryt(Number(id),Parent_category);
    }

    @Delete('delete/:id')
    deleteParent_category(@Param('id') id:number){
        return this.Parent_categoryService.deleteParent_category(Number(id));
    }
}