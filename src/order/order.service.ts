import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { OrderDto } from "./dto/order.dto";

@Injectable()
export class OrderService{
constructor(private prisma: PrismaService){}
getAllOrder(){
    return this.prisma.order.findMany();
}


getOneOrder(id:number){
    return this.prisma.order.findFirst({ where: {
        id: id,
      },});
}
    
createOrder(order:OrderDto){
    return this.prisma.order.create({
        data: {
          status_id:order.status_id,
          customer_name:order.customer_name,
          customer_tel:order.customer_tel,
          customer_address:order.customer_address,
          customer_note:order.customer_note,
          note:order.note,
          delivery_id:order.delivery_id,
          total:order.total,
        },})
}
    

updateOrdert(id:number,order:OrderDto){
    return this.prisma.order.update({where: {
        id: id,
      },
      data: {
        status_id:order.status_id,
        customer_name:order.customer_name,
        customer_tel:order.customer_tel,
        customer_address:order.customer_address,
        customer_note:order.customer_note,
        note:order.note,
        delivery_id:order.delivery_id,
        total:order.total,
      },})
}
    

deleteOrder(id:number){
    return this.prisma.order.delete({where: {
        id: id,
      },})
}
    
}

