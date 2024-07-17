import { IsArray, IsNotEmpty } from "class-validator";

export class CloudinaryDTO {

    @IsNotEmpty()
    @IsArray()
    path:string[];
}