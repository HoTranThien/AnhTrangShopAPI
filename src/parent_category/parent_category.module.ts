import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { Parent_categoryController } from "./parent_category.controller";
import { Parent_categoryService } from "./parent_category.service";

@Module({
    imports:[PrismaModule],
    controllers: [Parent_categoryController],
    providers: [Parent_categoryService],
})
export class Parent_categoryModule{

}