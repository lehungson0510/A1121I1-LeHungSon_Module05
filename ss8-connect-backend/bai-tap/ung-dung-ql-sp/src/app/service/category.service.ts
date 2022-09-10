import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  readonly API_URL = 'http://localhost:3000/categories';

  constructor() { }
}
