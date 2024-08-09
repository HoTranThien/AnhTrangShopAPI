import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { ProductOrderDto } from "./dto/product_order.dto";

@Injectable()
export class ProductOrderService{
constructor(private prisma: PrismaService){}

getAllOf(productId:number){
    return this.prisma.productOrder.findMany({where:{
        productId:productId,
    }});
}

    
create(ProductOrder:ProductOrderDto){
    return this.prisma.productOrder.create({
        data: {
            productId: Number(ProductOrder.productId),
            orderId: Number(ProductOrder.orderId),
            size: ProductOrder.size,
            color: ProductOrder.color,
            quantity: ProductOrder.quantity,
        },})
}
// createMany(ProductOrder:ProductOrderDto[]){
//     return this.prisma.productOrder.createMany({
//         data: ProductOrder,})
// }

async delete(ProductOrder:ProductOrderDto){
    let del = await this.prisma.productOrder.deleteMany({where:{
            AND:[{
                productId:Number(ProductOrder.productId)},
                {orderId:Number(ProductOrder.orderId)}
            ],}})
    return "Delete Success"
}
    
}

