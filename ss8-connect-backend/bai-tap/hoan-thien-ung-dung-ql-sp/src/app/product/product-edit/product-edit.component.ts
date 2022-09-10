import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "../models/product";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../service/product.service";
import {Category} from "../models/category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  product: Product;
  categoryList: Category[] = [];

  constructor(private productService: ProductService,
              private router: Router,
              private activeRouter: ActivatedRoute,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(
      (data) => this.categoryList = data
    );

    this.activeRouter.paramMap.subscribe((param) => {
      // tslint:disable-next-line:radix
      const id = parseInt(param.get('id'));
      this.productService.findById(id).subscribe(
        (data) => {
          this.product = data;
          this.productForm = new FormGroup({
            id: new FormControl(this.product.id),
            name: new FormControl(this.product.name),
            price: new FormControl(this.product.price),
            description: new FormControl(this.product.description),
            category: new FormControl(this.product.category),
          });
        }
      )
    });
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
        alert("Sửa thành công")
      },
    );
  }
}
