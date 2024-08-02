import { IsNotEmpty, IsNumberString } from "class-validator"

export class ProductColorDto{
    @IsNumberString()
    @IsNotEmpty()
    productId:number
    
    @IsNumberString()
    @IsNotEmpty()
    colorId:number
}