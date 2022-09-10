import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ICustomer} from "../model/ICustomer";
import {CustomerService} from "../service/customer.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm: FormGroup;
  customer: ICustomer = {};

  constructor(private customerService: CustomerService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      const id = parseInt(param.get('id'));
      this.customerService.findById(id).subscribe(
        (data) => {
          this.customer = data;
          console.log(data)
          this.customerForm = new FormGroup({
            id: new FormControl(''),
            typeId: new FormControl(this.customer.typeId, [Validators.required]),
            name: new FormControl(this.customer.name, [Validators.required, Validators.pattern('^\\D*$')]),
            birthday: new FormControl(this.customer.birthday, Validators.required),
            gender: new FormControl(this.customer.gender, [Validators.required]),
            idCard: new FormControl(this.customer.idCard, [Validators.required, Validators.pattern('^\\d{9}$|^\\d{11}$')]),
            phone: new FormControl(this.customer.phone, [Validators.required, Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)\\d{7}$')]),
            email: new FormControl(this.customer.email, [Validators.required, Validators.email]),
            address: new FormControl(this.customer.address, [Validators.required])
          })
        })
    })
  }

  editCustomer(id: number) {
    const value = this.customerForm.value;
    this.customerService.edit(id, value).subscribe(
      () => {
      },
      () => {
      },
      () => {
        this.router.navigateByUrl('/customer/list');
        alert("Sửa thành công")
      },
    );
  }
}
