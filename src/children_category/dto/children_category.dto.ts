import { IsNotEmpty, IsNumber, IsNumberString, IsString } from "class-validator";

export class Children_categoryDto{
    @IsString()
    @IsNotEmpty()
    name:string;
    
    @IsNumberString()
    @IsNotEmpty()
    pacaId:number
}