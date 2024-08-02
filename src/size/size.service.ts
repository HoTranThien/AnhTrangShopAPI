import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { SizeDto } from "./dto/size.dto";

@Injectable()
export class SizeService{
constructor(private prisma: PrismaService){}
getAllSize(){
    return this.prisma.size.findMany();
}


getOneSize(id:number){
    return this.prisma.size.findFirst({ where: {
        id: id,
      },});
}
    
async createSize(Size:SizeDto){
    try{
      let data = await this.prisma.size.create({
        data: {
          name: Size.name,
        },})
      return data;
    }
    catch(error){
      throw error
    }
}
    

updateSizet(id:number,Size:SizeDto){
    return this.prisma.size.update({where: {
        id: id,
      },
      data: {
        name: Size.name,
      },})
}
    

deleteSize(id:number){
    return this.prisma.size.delete({where: {
        id: id,
      },})
}
    
}

