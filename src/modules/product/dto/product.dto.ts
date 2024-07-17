import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class ProductDTO{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email:string;
    

    role?:string;
}