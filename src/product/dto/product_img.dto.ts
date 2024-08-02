import { IsNotEmpty, IsNumberString, IsString } from "class-validator"

export class ProductImgDto{
    @IsString()
    @IsNotEmpty()
    link:string

    @IsNotEmpty()
    @IsNumberString()
    productId:number

    
}