import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Parent_categoryDto } from "./dto/parent_category.dto";

@Injectable()
export class Parent_categoryService{
constructor(private prisma: PrismaService){}
getAllParent_category(){
    return this.prisma.parent_category.findMany();
}

getAllWithChildren(){
  return this.prisma.parent_category.findMany({select:{name:true,id:true,children_category:true}})
}

getOneParent_category(id:number){
    return this.prisma.parent_category.findFirst({ where: {
        id: id,
      },});
}
    
createParent_category(Parent_category:Parent_categoryDto){
    return this.prisma.parent_category.create({
        data: {
          name: Parent_category.name,
        },})
}
    

updateParent_categoryt(id:number,Parent_category:Parent_categoryDto){
    return this.prisma.parent_category.update({where: {
        id: id,
      },
      data: {
        name: Parent_category.name,
      },})
}
    

deleteParent_category(id:number){
    return this.prisma.parent_category.delete({where: {
        id: id,
      },})
}
    
}

