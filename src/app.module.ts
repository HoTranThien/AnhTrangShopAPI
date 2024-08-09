import { Module } from '@nestjs/common';
import { CollectionModule } from './collection/collection.module';
import { ColorModule } from './color/color.module';
import { SizeModule } from './size/size.module';
import { Parent_categoryModule } from './parent_category/parent_category.module';
import { Children_categoryModule } from './children_category/children_category.module';
import { Img_productModule } from './img_product/img_product.module';
import { ProductModule } from './product/product.module';
import { DeliveryModule } from './delivery/delivery.module';
import { OrderModule } from './order/order.module';



@Module({
  imports: [
    CollectionModule,
    ColorModule,
    SizeModule,
    Parent_categoryModule,
    Children_categoryModule,
    Img_productModule,
    ProductModule,
    DeliveryModule,
    OrderModule,
  ],

})
export class AppModule {}
