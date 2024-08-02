import { IsNotEmpty, IsNumber, IsNumberString, IsString } from "class-validator";

export class DeliveryDto{
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsNumberString()
    @IsNotEmpty()
    cost:number;
}