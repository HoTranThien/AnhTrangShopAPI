import { IsNotEmpty, IsNumberString } from "class-validator"

export class ProductSizeDto{
    @IsNumberString()
    @IsNotEmpty()
    productId:number

    @IsNumberString()
    @IsNotEmpty()
    sizeId:number
}