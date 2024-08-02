import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { ProductSizeDto } from "./dto/product_size.dto";
import { ProductColorDto } from "./dto/product_color.dto";

@Injectable()
export class ProductColorService{
constructor(private prisma: PrismaService){}

getAllOf(productId:number){
    return this.prisma.productColor.findMany({where:{
        productId:productId,
    }});
}

    
create(ProductColor:ProductColorDto){
    return this.prisma.productColor.create({
        data: {
            productId: Number(ProductColor.productId),
            colorId: Number(ProductColor.colorId),
        },})
}
createMany(ProductColor:ProductColorDto[]){
    return this.prisma.productColor.createMany({
        data: ProductColor,})
}

async delete(ProductColor:ProductColorDto){
    let del = await this.prisma.productColor.deleteMany({where:{
            AND:[{
                productId:Number(ProductColor.productId)},
                {colorId:Number(ProductColor.colorId)}
            ],}})
    return "Delete Success"
}
    
}

