import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {Router} from "@angular/router";
import {ProductService} from "../../service/product.service";
import {Category} from "../models/category";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  temp: Product = {
    // Không có cái này sẽ bị lỗi hiển thị vì chưa có trường 'name'
    "category": {}
  };
  mes: string;
  page: string | number = 1;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getAllProduct();
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

}
