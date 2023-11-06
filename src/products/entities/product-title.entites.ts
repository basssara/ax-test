import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity('products_title')
export class ProductTitleEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @OneToOne(() => ProductEntity, (prod) => prod.title)
  product: ProductEntity;

  @Column({ type: 'varchar', length: 255 })
  en: string;

  @Column({ type: 'varchar', length: 255 })
  ru: string;
}
