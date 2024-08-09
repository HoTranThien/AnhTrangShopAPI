import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { OrderController } from "./order.controller";
import { OrderService } from "./order.service";
import { ProductOrderController } from "./product_order.controller";
import { ProductOrderService } from "./product_order.service";

@Module({
    imports:[PrismaModule],
    controllers: [OrderController,ProductOrderController],
    providers: [OrderService,ProductOrderService],
})
export class OrderModule{

}