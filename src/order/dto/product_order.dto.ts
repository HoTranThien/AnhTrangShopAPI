import { IsNotEmpty, IsNumberString } from "class-validator"

export class ProductOrderDto{
    @IsNumberString()
    @IsNotEmpty()
    productId:number
    
    @IsNumberString()
    @IsNotEmpty()
    orderId:number

    @IsNotEmpty()
    size:string

    @IsNotEmpty()
    color:string
    
    @IsNumberString()
    @IsNotEmpty()
    quantity:number
}