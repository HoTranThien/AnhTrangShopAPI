import { Body, Controller, Delete, Post, UploadedFile, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { CloudinaryService } from "./cloudinary.service";
import { CloudinaryDTO } from "./dto/cloudinary.dto";
import { AnyFilesInterceptor, FileInterceptor } from "@nestjs/platform-express";

@Controller('api/img')
export class CloudinaryController{
    constructor(private cloudinaryService:CloudinaryService){}

    @Post('post')
    @UseInterceptors(AnyFilesInterceptor())
    PostImg(@UploadedFiles() imgs:Array<Express.Multer.File>){
        console.log(imgs);
        return this.cloudinaryService.PostImg(imgs);
    }

    @Delete('delete')
    DeleteImg(@Body() imgs:CloudinaryDTO){
        return this.cloudinaryService.DeleteImg(imgs);
    }
    @Post('test')
    test(@Body() i:string){
        console.log(i);
        return i;
    }
}