import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { ColorDto } from "./dto/color.dto";

@Injectable()
export class ColorService{
constructor(private prisma: PrismaService){}
getAllcolor(){
    return this.prisma.color.findMany();
}


getOnecolor(id:number){
    return this.prisma.color.findFirst({ where: {
        id: id,
      },});
}
    
createcolor(color:ColorDto){
    return this.prisma.color.create({
        data: {
          name: color.name,
          code: color.code,
        },})
}
    

updatecolort(id:number,color:ColorDto){
    return this.prisma.color.update({where: {
        id: id,
      },
      data: {
        name: color.name,
        code: color.code,
      },})
}
    

deletecolor(id:number){
    return this.prisma.color.delete({where: {
        id: id,
      },})
}
    
}

