import { Category } from './category-type';
import { Languages } from './languages';

export type Product = {
  name: string;
  category: Category;
  title: Languages;
  description: Languages;
  price: number;
};
