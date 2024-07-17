import { Module } from '@nestjs/common';
import { ProductModule } from './modules/product/product.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';


@Module({
  imports: [
    ProductModule,
    CloudinaryModule
  ],

})
export class AppModule {}
