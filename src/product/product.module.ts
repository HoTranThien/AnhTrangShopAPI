import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import { ProductSizeController } from "./product_size.controller";
import { ProductImgController } from "./product_img.controller";
import { ProductSizeService } from "./product_size.service";
import { ProductColorService, } from "./product_color.service";
import { ProductImgService } from "./product_img.service";
import { ProductColorController } from "./product_color.controller";

@Module({
    controllers: [ProductController,ProductSizeController,ProductColorController,ProductImgController],
    providers: [ProductService,ProductSizeService,ProductImgService,ProductColorService],
})
export class ProductModule{

}