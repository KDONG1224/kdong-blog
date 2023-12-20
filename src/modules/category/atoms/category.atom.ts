import { atom } from 'recoil';
import { CategoryListsProps } from '../models/category.model';

export const mainCategoryState = atom<CategoryListsProps[]>({
  key: 'mainCategoryState',
  default: []
});
