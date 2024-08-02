import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Img_productDto } from "./dto/img_product.dto";

@Injectable()
export class Img_productService{
constructor(private prisma: PrismaService){}
getAllImg_product(){
    return this.prisma.img_product.findMany();
}


getOneImg_product(id:number){
    return this.prisma.img_product.findFirst({ where: {
        id: id,
      },});
}
    
createImg_product(Img_product:Img_productDto){
    return this.prisma.img_product.create({
        data: {
          link: Img_product.link,
          productId: Img_product.productId,
        },})
}
    

updateImg_productt(id:number,Img_product:Img_productDto){
    return this.prisma.img_product.update({where: {
        id: id,
      },
      data: {
        link: Img_product.link,
        productId: Img_product.productId,
      },})
}
    

deleteImg_product(id:number){
    return this.prisma.img_product.delete({where: {
        id: id,
      },})
}
    
}

