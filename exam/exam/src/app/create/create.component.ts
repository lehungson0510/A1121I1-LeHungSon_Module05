import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../models/product';
import {Package} from '../models/package';
import {ProductService} from '../service/product.service';
import {PackageService} from '../service/package.service';
import {Router} from '@angular/router';
import {identityRevealedValidator} from '../models/validator';
import {formatDate} from '@angular/common';
import {defaultIfEmpty} from 'rxjs/operators';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  packForm: FormGroup;
  productList: Product[] = [];
  pack: Package = {
    product: {}
  };

  // date = formatDate(new Date(''), 'yyyy-MM-dd', 'en_US');

  constructor(private productService: ProductService,
              private packageService: PackageService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllProduct();
    this.packForm = new FormGroup({
      id: new FormControl(''),
      code: new FormControl('', [Validators.required, Validators.pattern('LH-\\d{4}')]),
      product: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required, Validators.min(1)]),
      dateImport: new FormControl('', [Validators.required]),
      dateStart: new FormControl('', [Validators.required]),
      dateEnd: new FormControl('', [Validators.required]),
    }, identityRevealedValidator);
  }

  getAllProduct() {
    this.productService.getAll().subscribe(
      (data) => {
        this.productList = data;
      }
    );
  }

  submit() {
    const value = this.packForm.value;
    this.packageService.create(value).subscribe(
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
