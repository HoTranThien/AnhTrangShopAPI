import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { ProductSizeDto } from "./dto/product_size.dto";

@Injectable()
export class ProductSizeService{
constructor(private prisma: PrismaService){}

getAllOf(productId:number){
    return this.prisma.productSize.findMany({where:{
        productId:productId,
    }});
}

    
create(ProductSize:ProductSizeDto){
    return this.prisma.productSize.create({
        data: {
            productId: Number(ProductSize.productId),
            sizeId: Number(ProductSize.sizeId),
        },})
}
createMany(ProductSize:ProductSizeDto[]){
    return this.prisma.productSize.createMany({
        data: 
            ProductSize
        ,})
} 

async delete(ProductSize:ProductSizeDto){
    let del = await this.prisma.productSize.deleteMany({where:{
            AND:[{
                productId:Number(ProductSize.productId)},
                {sizeId:Number(ProductSize.sizeId)}
            ],}})
    return "Delete Success"
}
    
}

