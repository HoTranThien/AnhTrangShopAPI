import { IsNotEmpty, IsNumberString, ValidateIf } from "class-validator"

export class ProductOrderDto{
    @IsNumberString()
    @IsNotEmpty()
    productId:number
    
    @IsNumberString()
    orderId:number

    @IsNotEmpty()
    size:string

    @IsNotEmpty()
    color:string
    
    @IsNumberString()
    @IsNotEmpty()
    quantity:number
}