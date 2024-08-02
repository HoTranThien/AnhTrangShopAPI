import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { Img_productController } from "./img_product.controller";
import { Img_productService } from "./img_product.service";

@Module({
    imports:[PrismaModule],
    controllers: [Img_productController],
    providers: [Img_productService],
})
export class Img_productModule{

}