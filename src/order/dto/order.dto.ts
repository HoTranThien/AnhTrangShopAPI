import { ProductOrder } from "@prisma/client";
import { IsEmpty, IsNotEmpty, IsNumber, IsNumberString, IsObject, isString, IsString, ValidateIf } from "class-validator";

export class OrderDto{

    @ValidateIf(value=>typeof(value) == 'string'||value==null )
    status:string

    @IsNotEmpty()
    products:ProductOrder[]

    @IsString()
    @IsNotEmpty()
    customer_name:string

    @IsString()
    @IsNotEmpty()
    customer_tel:string

    @IsString()
    @IsNotEmpty()
    customer_address:string

    @ValidateIf(value=>typeof(value) == 'string'||value==null )
    customer_note:string = ""

    @ValidateIf(value=>typeof(value) == 'string'||value==null )
    note:string =""

    @IsNumber()
    @IsNotEmpty()
    delivery_id:number

    @IsNumber()
    @IsNotEmpty()
    total:number
}

export class UpdateOrderDto{
    @ValidateIf(value=>typeof(value) == 'string'||value==null )
    status:string

    @IsString()
    @IsNotEmpty()
    customer_name:string

    @IsString()
    @IsNotEmpty()
    customer_tel:string

    @IsString()
    @IsNotEmpty()
    customer_address:string

    @ValidateIf(value=>typeof(value) == 'string'||value==null )
    customer_note:string = ""

    @ValidateIf(value=>typeof(value) == 'string'||value==null )
    note:string =""
}
export class Status{
    @IsString()
    @IsNotEmpty()
    status:string
}