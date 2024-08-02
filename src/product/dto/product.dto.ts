import { Img_product } from "@prisma/client"
import { IsBooleanString, IsNotEmpty, IsNumberString, IsString } from "class-validator"
import { Img_productDto } from "../../img_product/dto/img_product.dto"


export class ProductDto{
    @IsString()
    @IsNotEmpty()
    name:string
    
    @IsNumberString()
    @IsNotEmpty()
    cost:number

    @IsNumberString()
    sale_cost:number

    @IsString()
    @IsNotEmpty()
    description:string

    @IsNumberString()
    @IsNotEmpty()
    quantity:number

    @IsBooleanString()
    @IsNotEmpty()
    new:boolean

    @IsNumberString()
    @IsNotEmpty()
    collectionId:number

    @IsNumberString()
    @IsNotEmpty()
    parent_categoryId:number

    @IsNumberString()
    @IsNotEmpty()
    children_categoryId:number
    @IsNotEmpty()
    sizeId:any
    @IsNotEmpty()
    colorId:any
}
export class UpdateProductDto{
    @IsString()
    @IsNotEmpty()
    name:string
    
    @IsNumberString()
    @IsNotEmpty()
    cost:number

    @IsNumberString()
    sale_cost:number

    @IsString()
    @IsNotEmpty()
    description:string

    @IsNumberString()
    @IsNotEmpty()
    quantity:number

    @IsBooleanString()
    @IsNotEmpty()
    new:boolean

    @IsNumberString()
    @IsNotEmpty()
    collectionId:number

    @IsNumberString()
    @IsNotEmpty()
    parent_categoryId:number

    @IsNumberString()
    @IsNotEmpty()
    children_categoryId:number
    @IsNotEmpty()
    sizeId:any
    @IsNotEmpty()
    colorId:any

    @IsNotEmpty()
    removedImgs:any
}

