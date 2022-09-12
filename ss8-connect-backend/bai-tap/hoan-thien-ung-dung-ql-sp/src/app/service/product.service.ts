import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../product/models/product";
import {Category} from "../product/models/category";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly API_URL = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_URL + `?_sort=category.name&_order=asc`);
  }

  create(product: Product): Observable<void> {
    return this.http.post<void>(this.API_URL, product);
  }

  edit(id: number, product: Product): Observable<void> {
    return this.http.patch<void>(this.API_URL + '/' + id, product);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.API_URL + '/' + id);
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>(this.API_URL + '/' + id);
  }

  // search(name: string, priceStart: number, priceEnd: number, categoryId: number): Observable<Product[]>{
  //   return this.http.get<Product[]>(this.API_URL + '?name_like = ${name}&_start=${priceStart}&_end=${priceEnd}$product.category.id=${category.id}')
  // }
  // search(name: string): Observable<Product[]>{
  //   return this.http.get<Product[]>(this.API_URL + `?name_like=${name}`)
  // }
  search(name: string, priceStart: number, priceEnd: number, categoryId: string): Observable<Product[]> {
    if (!isNaN(priceEnd) && !isNaN(priceEnd)) {
      return this.http.get<Product[]>(this.API_URL + `?name_like=${name}&price_gte=${priceStart}&price_lte=${priceEnd}&category.id_like=${categoryId}`)
    }
    return this.http.get<Product[]>(`${this.API_URL}?name_like=${name}&category.id_like=${categoryId}&_sort=category.name&_order=asc`)
  }
}
