import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] =[];
  temp: Product = {};
  mes: string ='';
  page: string | number = 1;

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.products = this.productService.getAll();
  }

  delete(product: Product) {
    this.productService.deleteProduct(product.id);
    this.mes = 'Xóa thành công sản phẩm: ' + product.name
  }
}
