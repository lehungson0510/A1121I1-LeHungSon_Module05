import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../models/Category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  readonly API_URL = 'http://localhost:3000/category';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.API_URL);
  }
}
