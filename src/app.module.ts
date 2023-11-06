import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  ProductEntity,
  ProductDescriptionEntity,
} from './products/entities/product.entity';
import {
  CategoryEnity,
  CategoryDescriptionEntity,
  CategoryTitleEnitity,
} from './products/entities/category.entity';
import { ProductTitleEntity } from './products/entities/product-title.entites';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ProductsModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: '12345',
      username: 'postgres',
      entities: [
        ProductEntity,
        ProductDescriptionEntity,
        ProductTitleEntity,
        CategoryEnity,
        CategoryDescriptionEntity,
        CategoryTitleEnitity,
      ],
      database: 'pps',
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
