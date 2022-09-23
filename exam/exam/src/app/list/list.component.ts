import {Component, OnInit} from '@angular/core';
import {ProductService} from '../service/product.service';
import {PackageService} from '../service/package.service';
import {Product} from '../models/product';
import {Package} from '../models/package';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  productList: Product[] = [];
  packageList: Package[] = [];
  page: number | string = 1;
  temp: Package = {
    product: {}
  };

  constructor(private productService: ProductService,
              private packageService: PackageService) {
  }

  ngOnInit(): void {
    this.getAllPackage();
    this.getAllProduct();
  }

  getAllProduct() {
    this.productService.getAll().subscribe(
      (data) => {
        this.productList = data;
      }
    );
  }

  getAllPackage() {
    this.packageService.getAll().subscribe(
      (data) => {
        this.packageList = data;
      }
    );
  }

  delete(temp: Package) {
    this.packageService.delete(temp.id).subscribe(
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

  searchName(productId: string, dateEnd: string, start: string, end: string) {
    this.page = 1;
    this.packageService.searchName(productId, dateEnd, start, end).subscribe(
      (data) => {
        this.packageList = data;
      }
    );
  }

  search(productId: string) {
    this.page = 1;
    this.packageService.search(productId).subscribe(
      (data) => {
        this.packageList = data;
      }
    );
  }
}
