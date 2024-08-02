import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Children_categoryDto } from "./dto/children_category.dto";

@Injectable()
export class Children_categoryService{
constructor(private prisma: PrismaService){}
getAllChildren_category(){
    return this.prisma.children_category.findMany();
}


getOneChildren_category(id:number){
    return this.prisma.children_category.findFirst({ where: {
        id: id,
      },});
}
    
createChildren_category(Children_category:Children_categoryDto){
    return this.prisma.children_category.create({
        data: {
          name: Children_category.name,
          pacaId: Number(Children_category.pacaId),
        },})
}
    

updateChildren_categoryt(id:number,Children_category:Children_categoryDto){
    return this.prisma.children_category.update({where: {
        id: id,
      },
      data: {
        name: Children_category.name,
        pacaId: Number(Children_category.pacaId),
      },})
}
    

deleteChildren_category(id:number){
    return this.prisma.children_category.delete({where: {
        id: id,
      },})
}
    
}

