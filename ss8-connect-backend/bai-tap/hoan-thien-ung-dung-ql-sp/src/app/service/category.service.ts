import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../product/models/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  readonly API_URL = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.API_URL);
  }

  create(category: Category): Observable<void> {
    return this.http.post<void>(this.API_URL, category);
  }

  edit(id: number, category: Category): Observable<void> {
    return this.http.patch<void>(this.API_URL + '/' + id, category);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.API_URL + '/' + id);
  }

  findById(id: number): Observable<Category> {
    return this.http.get<Category>(this.API_URL + '/' + id);
  }
}
