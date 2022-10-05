import {Component, OnInit} from '@angular/core';
import {ProductService} from '../service/product.service';
import {PackageService} from '../service/package.service';
import {Product} from '../models/product';
import {Package} from '../models/package';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  productList: Product[] = [];
  packageList: Package[] = [];
  totalPageList: number[] = [];
  page: number = 0;
  size: number = 3;
  totalPages: number;
  temp: Package = {
    product: {}
  };
  packageSearchForm: FormGroup;

  constructor(private productService: ProductService,
              private packageService: PackageService) {
  }

  ngOnInit(): void {
    this.packageSearchForm = new FormGroup({
      productId: new FormControl(''),
      endDate: new FormControl('')
      // ,dateProduct1: new FormControl(''),
      // dateProduct2: new FormControl('')
    });
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
    this.packageService.getAll(this.page, this.size).subscribe(
      (data: any) => {
        this.packageList = data.content;
        this.totalPageList = [];
        this.totalPages = data.totalPages;
        console.log(this.totalPages);
        for (let i = 0; i < this.totalPages; i++) {
          this.totalPageList.push(i);
        }
      },
      () => {
        this.page = 0;
        this.getAllPackage();
      },
      () => {
        this.productService.getAll().subscribe((data) => {
          this.productList = data;
        });
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
        alert('Xóa thành công');
        this.page = 0;
        this.getAllPackage();
      },
    );
  }

  // searchName(productId: string, dateEnd: string, start: string, end: string) {
  //   this.page = 1;
  //   this.packageService.searchName(productId, dateEnd, start, end).subscribe(
  //     (data) => {
  //       this.packageList = data;
  //     }
  //   );
  // }
  //
  // search(productId: string) {
  //   this.page = 1;
  //   this.packageService.search(productId).subscribe(
  //     (data) => {
  //       this.packageList = data;
  //     }
  //   );
  // }
  search2() {
    this.packageService.searchIdAndEndDate(
      this.page,
      this.size,
      this.packageSearchForm.get('productId').value,
      this.packageSearchForm.get('endDate').value
      // ,this.packageSearch.get('dateProduct1').value,
      // this.packageSearch.get('dateProduct2').value
    ).subscribe(
      (data: any) => {
        this.packageList = data.content;

        this.totalPageList = [];
        this.totalPages = data.totalPages;

        for (let i = 0; i < this.totalPages; i++) {
          this.totalPageList.push(i);
        }
      }
    );
  }

  search() {
    this.page = 0;
    this.packageService.searchIdAndEndDate(
      this.page,
      this.size,
      this.packageSearchForm.get('productId').value,
      this.packageSearchForm.get('endDate').value
      // ,this.packageSearch.get('dateProduct1').value,
      // this.packageSearch.get('dateProduct2').value
    ).subscribe(
      (data: any) => {
        this.packageList = data.content;

        this.totalPageList = [];
        this.totalPages = data.totalPages;

        for (let i = 0; i < this.totalPages; i++) {
          this.totalPageList.push(i);
        }
      }
    );
  }

  getPreviousPage() {
    this.page--;
    if (this.packageSearchForm.get('productId').value !== '' || this.packageSearchForm.get('endDate').value !== '') {
      this.search2();
    } else {
      this.getAllPackage();
    }
  }

  getNextPage() {
    this.page++;
    if (this.packageSearchForm.get('productId').value !== '' || this.packageSearchForm.get('endDate').value !== '') {
      this.search2();
    } else {
      this.getAllPackage();
    }
  }

  getNumberPage(pageNumber: number) {
    this.page = pageNumber;
    if (this.packageSearchForm.get('productId').value !== '' || this.packageSearchForm.get('endDate').value !== '') {
      this.search2();
    } else {
      this.getAllPackage();
    }
  }

  reset() {
    this.ngOnInit();
  }
}
