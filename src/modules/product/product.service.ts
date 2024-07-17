import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { ProductDTO } from "./dto/product.dto";

@Injectable()

export class ProductService
{
    constructor(private prisma:PrismaService){}
    getAll(){
        return this.prisma.user.findMany();
    }

    getOne(){
        return "Get one product"
    }

    async createProduct(product: ProductDTO){
        const c = await this.prisma.user.create({data:{
            name: product.name,
            email: product.email,
        },});
        console.log(c);
        return c;
    }

    updateProduct(){
        return "Updated product"
    }

    deleteProduct(){
        return "Deleted product"
    }
}