import { IsNotEmpty, IsString } from "class-validator";

export class Parent_categoryDto{
    @IsString()
    @IsNotEmpty()
    name:string;
}