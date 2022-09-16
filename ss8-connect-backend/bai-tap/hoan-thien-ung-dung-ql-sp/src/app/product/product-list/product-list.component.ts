import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {Router} from "@angular/router";
import {ProductService} from "../../service/product.service";
import {Category} from "../models/category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  categoryList: Category[] = [];
  temp: Product = {
    "category": {}
  };
  mes: string;
  page: string | number = 1;

  constructor(private productService: ProductService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getAllProduct();
    this.getAllCategory();
  }

  delete(product: Product) {
    this.productService.delete(product.id).subscribe(
      () => {
      },
      () => {
      },
      () => {
        this.mes = 'Xóa thành công';
        this.ngOnInit();
      }
    );
  }

  getAllProduct() {
    this.productService.getAll().subscribe(
      (data) => {
        this.products = data;
      })
    ;
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(
      (data) => {
        this.categoryList = data;
      })
    ;
  }

  search(name: string, priceStart: string, priceEnd: string, categoryId: string) {

    const priceStartInt = parseInt(priceStart);
    const priceEndInt = parseInt(priceEnd);
    this.page =1;
    // const categoryIdInt = parseInt(category);
    // console.log(categoryIdInt)
    // this.productService.search(name, priceStartInt, priceEndInt, categoryIdInt).subscribe(
    this.productService.search(name, priceStartInt, priceEndInt, categoryId).subscribe(
      (data) => this.products = data
    )
  }

  // search(name: string) {
  //   this.productService.search(name).subscribe(
  //     (data) => this.products = data
  //   )
  // }
}
