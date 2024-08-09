import { Injectable } from "@nestjs/common";
import { CollectionDto } from "./dto/collection.dto";
import { PrismaService } from "../prisma/prisma.service";
import { CloudinaryService } from "../cloudinary/cloudinary.service";

@Injectable()
export class CollectionService{
constructor(private prisma: PrismaService, private cloudinary:CloudinaryService){}
getAllCollection(){
    return this.prisma.collection.findMany();
}
getAllCollectionFullDetail(){
  return this.prisma.collection.findMany({select:{
    id:true,
    img:true,
    name:true,
    product:{select:{
      id:true,
      name:true,
      collection:true,
      parent_category:true,
      children_category:true,
      img_product:true,
      cost:true,
      sale_cost:true,
      quantity:true,
      new:true,
      productColor:{select:{
        colorId:true,
        color:true,
      }},
      productSize:{select:{
        sizeId:true,
        size:true
      }},
      description:true,
    }},
  }});
}

getOneCollection(id:number){
    return this.prisma.collection.findFirst({ where: {
        id: id,
      },select:{
        id:true,
        img:true,
        name:true,
        product:{select:{
          id:true,
          name:true,
          collection:true,
          parent_category:true,
          children_category:true,
          img_product:true,
          cost:true,
          sale_cost:true,
          quantity:true,
          new:true,
          productColor:{select:{
            colorId:true,
            color:true,
          }},
          productSize:{select:{
            sizeId:true,
            size:true
          }},
          description:true,
        }}
      }});
}


async createCollection(collection:CollectionDto,img:Express.Multer.File[]){
    let myimg = await this.cloudinary.PostImgs(img);
    return this.prisma.collection.create({
        data: {
          name: collection.name,
          img: String(myimg[0]),
        },})
}
    

async updateCollection(id:number,collection:CollectionDto,img:Express.Multer.File[]|undefined){
    let path = await this.prisma.collection.findFirst({
        where:{id:id},
        select: {img:true}});
    let uploadnew:string|string[];
    if (img.length>0){
        let del = await this.cloudinary.DeleteImgs([path.img]);
        uploadnew = await this.cloudinary.PostImgs(img);
    }
    return this.prisma.collection.update({where: {
        id: id,
      },
      data: {
        name: collection.name,
        img: uploadnew ? String(uploadnew):path.img,
      },})
}
    
async deleteCollection(id:number){
  let img_path = await this.prisma.collection.findFirst({where:{
    id:id,
  },select: {img:true}});
  let del = await this.cloudinary.DeleteImgs([img_path.img]);
    return this.prisma.collection.delete({where: {
        id: id,
      },})
}
    
}

