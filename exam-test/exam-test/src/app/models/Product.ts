import {Category} from './Category';

export interface Product {
  id?: number;
  name?: string;
  price?: number;
  startDate?: string;
  endDate?: string;
  gender?: number;
  category?: Category;
}
