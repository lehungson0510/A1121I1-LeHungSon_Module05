import { Injectable } from '@angular/core';
import {Product} from "../product/model/product";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];

  readonly API_URL = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.products;
  }

  saveProduct(product) {
    this.products.push(product);
  }

  editProduct(product: Product){
    for (let i =0; i< this.products.length; i++){
      if(this.products[i].id === product.id){
        this.products[i] = product;
      }
    }
  }

  deleteProduct(id: number){
    for (let i =0; i< this.products.length; i++){
      if(this.products[i].id === id){
        this.products.splice(i,1)
      }
    }
  }

  findById(id: number) {
    return this.products.find((product) => product.id === id);
  }
}
