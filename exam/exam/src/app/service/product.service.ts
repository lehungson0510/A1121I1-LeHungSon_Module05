import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly API_URL = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
  return this.http.get<Product[]>(this.API_URL);
  }
}
