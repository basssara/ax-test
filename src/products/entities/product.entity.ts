import { Product, Languages } from 'src/types';
import { CategoryEnity } from './category.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { ProductTitleEntity } from './product-title.entites';

// @Entity('products_title')
// export class ProductTitleEntity {
//   @PrimaryGeneratedColumn()
//   id: string;

//   @OneToOne(() => ProductEntity, (prod) => prod.title)
//   product: ProductEntity;

//   @Column({ type: 'varchar', length: 255 })
//   en: string;

//   @Column({ type: 'varchar', length: 255 })
//   ru: string;
// }

@Entity('products_description')
export class ProductDescriptionEntity implements Languages {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar', length: 255 })
  en: string;

  @Column({ type: 'varchar', length: 255 })
  ru: string;
}

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar', length: 30 })
  name: string;

  // @OneToOne(() => CategoryEnity)
  // @JoinColumn()
  // category: CategoryEnity;

  @OneToOne(() => ProductTitleEntity, (prod) => prod.product)
  @JoinColumn()
  title: ProductTitleEntity;

  // @OneToOne(() => ProductDescriptionEntity)
  // @JoinColumn()
  // description: Relation<ProductDescriptionEntity>;

  @Column()
  price: number;
}
