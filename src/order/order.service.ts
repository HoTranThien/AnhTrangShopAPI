import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { OrderDto, Status, UpdateOrderDto } from "./dto/order.dto";

@Injectable()
export class OrderService{
constructor(private prisma: PrismaService){}
getAllOrder(){
    return this.prisma.order.findMany({select:{
      customer_address:true,
      customer_name:true,
      customer_note:true,
      customer_tel:true,
      id:true,
      note:true,
      status:true,
      total:true,
      delivery:true,
      createdAt:true,
      product:{select:{
        color:true,
        size:true,
        quantity:true,
        product:{select:{
          id:true,
          name:true,
          img_product:true,
        }}
      }},
    }});
}


getOneOrder(id:number){
    return this.prisma.order.findFirst({ where: {
        id: id,
      },select:{
        customer_address:true,
        customer_name:true,
        customer_note:true,
        customer_tel:true,
        id:true,
        note:true,
        status:true,
        total:true,
        delivery:true,
        createdAt:true,
        product:{select:{
          color:true,
          size:true,
          quantity:true,
          product:{select:{
            id:true,
            name:true,
            img_product:true,
          }}
        }},
      }});
}
    
async createOrder(order:OrderDto){
    let myorder = await this.prisma.order.create({
        data: {
          customer_name:order.customer_name,
          customer_tel:order.customer_tel,
          customer_address:order.customer_address,
          customer_note:order.customer_note,
          note:order.note,
          delivery_id:order.delivery_id,
          total:order.total,
        },})
        order.products=Array.isArray(order.products)?order.products:[order.products]
        let pror = await this.prisma.productOrder.createMany({
          data: order.products.map(el => {return {
            productId:Number(el.productId),
            orderId:Number(myorder.id),
            size:el.size,
            color:el.color,
            quantity:Number(el.quantity)
          }})
          })

    return {myorder,pror};
}
    

updateOrder(id:number,order:UpdateOrderDto){
    return this.prisma.order.update({where: {
        id: id,
      },
      data: {
        customer_name:order.customer_name,
        customer_tel:order.customer_tel,
        customer_address:order.customer_address,
        customer_note:order.customer_note,
        note:order.note,
        status: (order.status == "IN_DELIVERY")?"IN_DELIVERY":
                (order.status == "CANCEL")?"CANCEL":
                (order.status == "DONE")?"DONE":"NEW_ORDER"
      },})
}
updateStatus(id:number,status:Status){
  return this.prisma.order.update({where: {
    id: id,
  },
  data: {
    status: (status.status == "IN_DELIVERY")?"IN_DELIVERY":
            (status.status == "CANCEL")?"CANCEL":
            (status.status == "DONE")?"DONE":"NEW_ORDER"
  },})
}

deleteOrder(id:number){
    return this.prisma.order.delete({where: {
        id: id,
      },})
}
async getStatus(){
  let status = await this.prisma.$queryRaw`
  SELECT SUBSTRING(COLUMN_TYPE, 6, LENGTH(COLUMN_TYPE) - 6) AS status
  FROM INFORMATION_SCHEMA.COLUMNS 
  WHERE TABLE_NAME = 'Order' 
  AND COLUMN_NAME = 'status';
  `
  status[0].status = String(status[0].status).replaceAll("'",'').split(",");
  return status[0];
}
}

