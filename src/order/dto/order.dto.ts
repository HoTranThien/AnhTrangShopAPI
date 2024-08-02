import { IsNotEmpty, IsNumberString, IsString } from "class-validator";

export class OrderDto{

    @IsNumberString()
    @IsNotEmpty()
    status_id:number

    @IsString()
    @IsNotEmpty()
    customer_name:string

    @IsString()
    @IsNotEmpty()
    customer_tel:string

    @IsString()
    @IsNotEmpty()
    customer_address:string

    @IsString()
    @IsNotEmpty()
    customer_note:string

    @IsString()
    @IsNotEmpty()
    note:string

    @IsNumberString()
    @IsNotEmpty()

    delivery_id:number
    @IsNumberString()
    @IsNotEmpty()
    total:number
}