import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { Children_categoryController } from "./children_category.controller";
import { Children_categoryService } from "./children_category.service";

@Module({
    imports:[PrismaModule],
    controllers: [Children_categoryController],
    providers: [Children_categoryService],
})
export class Children_categoryModule{

}