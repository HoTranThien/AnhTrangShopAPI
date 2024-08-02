import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { DeliveryDto } from "./dto/delivery.dto";

@Injectable()
export class DeliveryService{
constructor(private prisma: PrismaService){}
getAlldelivery(){
    return this.prisma.delivery.findMany();
}


getOnedelivery(id:number){
    return this.prisma.delivery.findFirst({ where: {
        id: id,
      },});
}
    
createdelivery(delivery:DeliveryDto){
    return this.prisma.delivery.create({
        data: {
          name: delivery.name,
          cost: Number(delivery.cost)
        },})
}
    

updatedeliveryt(id:number,delivery:DeliveryDto){
    return this.prisma.delivery.update({where: {
        id: id,
      },
      data: {
        name: delivery.name,
        cost: Number(delivery.cost)
      },})
}
    

deletedelivery(id:number){
    return this.prisma.delivery.delete({where: {
        id: id,
      },})
}
    
}

