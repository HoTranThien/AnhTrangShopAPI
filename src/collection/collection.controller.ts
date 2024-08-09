import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { CollectionService } from "./collection.service";
import { CollectionDto } from "./dto/collection.dto";
import { AnyFilesInterceptor } from "@nestjs/platform-express";

@Controller('api/collection')
export class CollectionController{
    constructor(private productService:CollectionService){}
    @Get('getall')
    getAll(){
        return this.productService.getAllCollection();
    }
    @Get('fulldetail')
    getAllFulldetail(){
        return this.productService.getAllCollectionFullDetail();
    }

    @Get('getone/:id')
    getOne(@Param('id') id:number){
        return this.productService.getOneCollection(Number(id));
    }

    @Post('create')
    @UseInterceptors(AnyFilesInterceptor())
    createProduct(@Body()collection:CollectionDto,@UploadedFiles()img:Express.Multer.File[]){
        return this.productService.createCollection(collection,img);
    }

    @Put('update/:id')
    @UseInterceptors(AnyFilesInterceptor())
    updateProduct(@Param('id',ParseIntPipe) id:number,@Body() collection:CollectionDto,
                    @UploadedFiles()img:Express.Multer.File[]){
        return this.productService.updateCollection(id,collection,img);
    }

    @Delete('delete/:id')
    deleteProduct(@Param('id') id:number){
        return this.productService.deleteCollection(Number(id));
    }
    
}