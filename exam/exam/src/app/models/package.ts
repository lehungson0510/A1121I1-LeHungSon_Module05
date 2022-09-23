import {Product} from './product';

export interface Package {
  id?: number;
  code?: string;
  product?: Product;
  quantity?: number;
  dateImport?: string;
  dateStart?: string;
  dateEnd?: string;
}
