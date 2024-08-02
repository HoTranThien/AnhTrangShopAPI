import { IsArray, IsNotEmpty, IsString } from "class-validator";

export class CollectionDto{
    @IsString()
    @IsNotEmpty()
    name:string;

}