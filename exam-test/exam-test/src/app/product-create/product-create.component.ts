import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../service/product.service';
import {CategoryService} from '../service/category.service';
import {Router} from '@angular/router';
import {Category} from '../models/Category';
import {Product} from '../models/Product';
import {identityRevealedValidator} from '../models/product.validator';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;
  categoryList: Category[] = [];
  product: Product = {
    category: {}
  };
  date = formatDate(new Date(), 'yyyy-MM-dd', 'en_US');

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllCategory();
    this.productForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
      price: new FormControl('', [Validators.required, Validators.min(1)]),
      startDate: new FormControl(this.date, [Validators.required]),
      endDate: new FormControl(this.date, [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
    }, identityRevealedValidator);
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(
      (data) => {
        this.categoryList = data;
      }
    );
  }

  submit() {
    const value = this.productForm.value;
    this.productService.create(value).subscribe(
      () => {
      },
      () => {
      },
      () => {
        this.router.navigateByUrl('');
        alert('Thêm mới thành công');
      },
    );
  }
}
