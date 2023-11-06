import { Product } from 'src/types';
import { CategoryDto } from './category.dto';
import { IsNotEmpty, IsNumber, IsObject, IsString } from 'class-validator';

export class CreateProductDto implements Product {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsObject()
  category: CategoryDto;

  @IsNotEmpty()
  @IsObject()
  title: { en: string; ru: string };

  @IsNotEmpty()
  @IsObject()
  description: { en: string; ru: string };

  @IsNotEmpty()
  @IsNumber()
  price: number;
}
