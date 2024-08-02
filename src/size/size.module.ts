import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { SizeController } from "./size.controller";
import { SizeService } from "./size.service";

@Module({
    imports:[PrismaModule],
    controllers: [SizeController],
    providers: [SizeService],
})
export class SizeModule{

}