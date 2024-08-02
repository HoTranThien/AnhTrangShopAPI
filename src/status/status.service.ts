import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { StatusDto } from "./dto/status.dto";

@Injectable()
export class StatusService{
constructor(private prisma: PrismaService){}
getAll(){
    return this.prisma.status.findMany();
}


getOne(id:number){
    return this.prisma.status.findFirst({ where: {
        id: id,
      },});
}
    
create(status:StatusDto){
    return this.prisma.status.create({
        data: {
          name: status.name,
          code: status.code,
        },})
}
    

update(id:number,status:StatusDto){
    return this.prisma.status.update({where: {
        id: id,
      },
      data: {
        name: status.name,
        code: status.code,
      },})
}
    

delete(id:number){
    return this.prisma.status.delete({where: {
        id: id,
      },})
}
    
}

