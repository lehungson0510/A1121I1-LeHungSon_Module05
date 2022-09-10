import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../product/models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly API_URL = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_URL);
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
}
