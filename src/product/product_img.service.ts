import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { ProductImgDto } from "./dto/product_img.dto";

@Injectable()
export class ProductImgService{
constructor(private prisma: PrismaService){}
getAllOf(productId:number){
    return this.prisma.img_product.findMany({where:{
        productId:productId,
    }});
}

    
create(ProductImg:ProductImgDto){
    return this.prisma.img_product.create({
        data: {
            productId: Number(ProductImg.productId),
            link: ProductImg.link
        },})
}
   

async delete(ProductImg:ProductImgDto){
    let del = await this.prisma.img_product.deleteMany({where:{
            AND:[{
                productId:Number(ProductImg.productId)},
                {link:ProductImg.link}
            ],}})
    return "Delete Success"
}
    
}

