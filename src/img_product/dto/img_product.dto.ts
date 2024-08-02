import { IsNotEmpty, IsNumberString, IsString } from "class-validator";

export class Img_productDto{
    @IsString()
    @IsNotEmpty()
    link:string;

    @IsNotEmpty()
    @IsNumberString()
    productId:number
}