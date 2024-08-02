import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { ColorController } from "./color.controller";
import { ColorService } from "./color.service";

@Module({
    imports:[PrismaModule],
    controllers: [ColorController],
    providers: [ColorService],
})
export class ColorModule{

}