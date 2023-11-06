import { IsObject, IsString } from 'class-validator';
import { Category } from 'src/types';

export class CategoryDto implements Category {
  @IsString()
  name: string;

  @IsObject()
  title: { en: string; ru: string };

  @IsObject()
  description: { en: string; ru: string };
}
