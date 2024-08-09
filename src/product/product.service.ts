import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { ProductDto, UpdateProductDto } from "./dto/product.dto";
import { CloudinaryService } from "src/cloudinary/cloudinary.service";
import { ProductSizeService } from "./product_size.service";
import { ProductColor, ProductSize } from "@prisma/client";
import { ProductColorService } from "./product_color.service";


@Injectable()
export class ProductService{
    constructor(private prisma: PrismaService, private cloudinary:CloudinaryService,
        private productsize:ProductSizeService, private productcolor:ProductColorService){}
getAllProduct(){
    return this.prisma.product.findMany({select:{
        id:true,
        name:true,
        img_product:true,
        cost:true,
        sale_cost:true,
        description:true,
        quantity:true,
        new:true,
        collection:true,
        parent_category:true,
        children_category:true,
        productColor:true,
        productSize:true,

    }});
}


getOneProduct(id:number){
    return this.prisma.product.findFirst({ where: {
        id: id,
      },select:{
        id:true,
        name:true,
        img_product:true,
        cost:true,
        sale_cost:true,
        description:true,
        quantity:true,
        new:true,
        collection:true,
        parent_category:true,
        children_category:true,
        productColor:true,
        productSize:true,
      }});
}
    
async createProduct(Product:ProductDto,imgs:Express.Multer.File[]){
    let pro = await this.prisma.product.create({
        data: {
            name:Product.name,
            cost:Number(Product.cost),
            sale_cost:Number(Product.sale_cost),
            description:Product.description,
            quantity:Number(Product.quantity),
            new:true?(String(Product.new) == 'true'):false,
            collectionId:Number(Product.collectionId),
            parent_categoryId:Number(Product.parent_categoryId),
            children_categoryId:Number(Product.children_categoryId),
        },})
        let arrImg:string[] = await this.cloudinary.PostImgs(imgs);
        let upload = await this.prisma.img_product.createMany({
            data: arrImg.map((img)=>{ return {productId: pro.id, link: img}})
        })
        let arrPS = Product.sizeId.length>1?Product.sizeId:[Product.sizeId];
        let ps:ProductSize[] = arrPS.map((data)=>{return {productId:pro.id,sizeId:Number(data)}});
        let uploadsizes = await this.productsize.createMany(ps);
        let arrPC = Product.colorId.length>1?Product.colorId:[Product.colorId];
        let pc:ProductColor[] = arrPC.map((data)=> {return {productId: pro.id, colorId:Number(data)}});
        let uploadcolors = await this.productcolor.createMany(pc);
        return pro;
}
    

async updateProduct(id:number,Product:UpdateProductDto,imgs:Express.Multer.File[]){
    //update basic infomation
    let update = await this.prisma.product.update({where: {
        id: id,
      },
      data: {
        name:Product.name,
        cost:Number(Product.cost),
        sale_cost:Number(Product.sale_cost),
        description:Product.description,
        quantity:Number(Product.quantity),
        new:true?(String(Product.new) == 'true'):false,
        collectionId:Number(Product.collectionId),
        parent_categoryId:Number(Product.parent_categoryId),
        children_categoryId:Number(Product.children_categoryId),
      },});
      //add new imgs if any
    if(imgs){
        let arrImg:string[] = await this.cloudinary.PostImgs(imgs);
        let upload = await this.prisma.img_product.createMany({
            data: arrImg.map((img)=>{ return {productId:id, link: img}})});
    };
    //remove imgs in cloudinary if any
    if((typeof(Product.removedImgs) == 'string' && JSON.parse(Product.removedImgs) != null)
        ||typeof(Product.removedImgs) == 'object'){
        Product.removedImgs = (typeof(Product.removedImgs) == 'string')?[Product.removedImgs]:Product.removedImgs;
        Product.removedImgs = Product.removedImgs.map((data)=>{return JSON.parse(data)});
            let dpic = await this.cloudinary.DeleteImgs(Product.removedImgs.map(data=>{return data.link}));
            for(let i=0;i<Product.removedImgs.length;i++){
                let dpi = await this.prisma.img_product.delete({where:{
                    id:Product.removedImgs[i].id
                }})
            }
        };
    //update size
    let sizes = await this.prisma.productSize.findMany({where:{productId:id}});
    for(let i=0;i<sizes.length;i++){
        let index = Product.sizeId.findIndex((s)=>{return s == sizes[i].sizeId});
        if(index>=0){
            Product.sizeId.splice(index,1);
        }
        else await this.prisma.productSize.deleteMany({where:{
            AND:[{productId:id},{sizeId:sizes[i].sizeId}],
        }})
    }
    if(Product.sizeId&&Product.sizeId.length>0){
         let cns = await this.prisma.productSize.createMany({data:
            Product.sizeId.map((data)=>{return {productId:id,sizeId:Number(data)}})
        })
    }

    //update color
    let colors = await this.prisma.productColor.findMany({where:{productId:id}});
    for(let i=0;i<colors.length;i++){
        let index = Product.colorId.findIndex((s)=>{return s == colors[i].colorId});
        if(index>=0){
            Product.colorId.splice(index,1);
        }
        else await this.prisma.productColor.deleteMany({where:{
            AND:[{productId:id},{colorId:colors[i].colorId}],
        }})
    }
    if(Product.colorId&&Product.colorId.length>0){
         let cns = await this.prisma.productColor.createMany({data:
            Product.colorId.map((data)=>{return {productId:id,colorId:Number(data)}})
        })
    }

    return update;
}
    

async deleteProduct(id:number){
    let dps = await this.prisma.productSize.deleteMany({where:{
        productId:id
    }})
    let dpc = await this.prisma.productColor.deleteMany({where:{
        productId:id
    }})
    let pi = await this.prisma.img_product.findMany({where:{
        productId:id
    },select:{link:true}});
    let dpic = await this.cloudinary.DeleteImgs(pi.map(data=>{return data.link}));
    let dpi = await this.prisma.img_product.deleteMany({where:{
        productId:id
    }})
    
    let dpo = await this.prisma.productOrder.deleteMany({where:{
        productId:id
    }})
    let delPro = await this.prisma.product.delete({where: {
        id: id,
      },})
      return {message: 'Success'}
}

getSaleProducts(){
    return this.prisma.product.findMany({where:{sale_cost:{gt:0}},select:{
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

    }})
}

getNewProducts(){
    return this.prisma.product.findMany({where:{new:true},select:{
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

    }});
}

    getSearchedProducts(key:string){
        return this.prisma.product.findMany({where:{name:{contains:key}},select:{
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
        }})}
}