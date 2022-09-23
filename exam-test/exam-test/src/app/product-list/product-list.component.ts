import {Component, OnInit} from '@angular/core';
import {ProductService} from '../service/product.service';
import {Router} from '@angular/router';
import {CategoryService} from '../service/category.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from '../models/Category';
import {Product} from '../models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  categoryList: Category[] = [];
  page: number | string = 1;
  temp: Product = {
    category: {}
  };

  constructor(private productService: ProductService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getAllProduct();
    this.getAllCategory();
  }

  getAllProduct() {
    this.productService.getAll().subscribe(
      (data) => {
        this.productList = data;
      }
    );
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(
      (data) => {
        this.categoryList = data;
      }
    );
  }

  search(name: string, startPrice: string, endPrice: string, categoryId: string) {
    this.page = 1;
    // tslint:disable-next-line:radix
    const startPriceInt = parseInt(startPrice);
    // tslint:disable-next-line:radix
    const endPriceInt = parseInt(endPrice);
    this.productService.search(name, startPriceInt, endPriceInt, categoryId).subscribe(
      (data) => {
        this.productList = data;
      }
    );
  }

    delete(temp: Product) {
      this.productService.delete(temp.id).subscribe(
        () => {
        },
        () => {
        },
        () => {
          this.ngOnInit();
          alert('Xóa thành công');
        },
      );
    }
}
