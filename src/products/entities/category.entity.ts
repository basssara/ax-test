import { Category, Languages } from 'src/types';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity('categories')
export class CategoryEnity implements Category {
  @PrimaryGeneratedColumn()
  id: string;

  @OneToOne(() => ProductEntity)
  productId: ProductEntity;

  @Column()
  name: string;

  @OneToOne(() => CategoryTitleEnitity)
  @JoinColumn()
  title: Relation<CategoryTitleEnitity>;

  @OneToOne(() => CategoryDescriptionEntity)
  @JoinColumn()
  description: Relation<CategoryDescriptionEntity>;
}

@Entity('categories_description')
export class CategoryDescriptionEntity implements Languages {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar', length: 255 })
  en: string;

  @Column({ type: 'varchar', length: 255 })
  ru: string;
}

@Entity('categories_title')
export class CategoryTitleEnitity implements Languages {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar', length: 255 })
  en: string;

  @Column({ type: 'varchar', length: 255 })
  ru: string;
}
