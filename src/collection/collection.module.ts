import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { CollectionController } from "./collection.controller";
import { CollectionService } from "./collection.service";
import { CloudinaryModule } from "src/cloudinary/cloudinary.module";

@Module({
    imports:[PrismaModule,CloudinaryModule],
    controllers: [CollectionController],
    providers: [CollectionService],
})
export class CollectionModule{

}