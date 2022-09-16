import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../models/Product';
import {Category} from '../models/Category';
import {ProductService} from '../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../service/category.service';
import {formatDate} from '@angular/common';
import {identityRevealedValidator} from '../models/product.validator';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  product: Product = {};
  categoryList: Category[] = [];

  constructor(private productService: ProductService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getAllCategory();
    this.activatedRoute.paramMap.subscribe(
      (param) => {
        // tslint:disable-next-line:radix
        const id = parseInt(param.get('id'));
        this.productService.findById(id).subscribe(
          (data) => {
            this.product = data;
            const startDateFormat = formatDate(this.product.startDate, 'yyyy-MM-dd', 'en_US');
            const endDateFormat = formatDate(this.product.endDate, 'yyyy-MM-dd', 'en_US');
            this.productForm = new FormGroup({
              id: new FormControl(''),
              name: new FormControl(this.product.name, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
              price: new FormControl(this.product.price, [Validators.required, Validators.min(1)]),
              startDate: new FormControl(startDateFormat, [Validators.required]),
              endDate: new FormControl(endDateFormat, [Validators.required]),
              gender: new FormControl(this.product.gender, [Validators.required]),
              category: new FormControl(this.product.category, [Validators.required]),
            }, identityRevealedValidator);
          }
        );
      }
    );
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(
      (data) => this.categoryList = data
    );
  }

  compare(o1: any, o2: any) {
    return o1 && o2 ? o1.id === o2.id : o1 = o2;
  }

  edit(id: number) {
    const product = this.productForm.value;
    this.productService.edit(id, product).subscribe(
      () => {
      },
      () => {
      },
      () => {
        this.router.navigateByUrl('');
        alert('Sửa thành công');
      },
    );
  }

}
