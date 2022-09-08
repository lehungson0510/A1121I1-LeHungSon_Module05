import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../service/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerForm: FormGroup;

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      id: new FormControl('',[Validators.required]),
      typeId: new FormControl('',[Validators.required]),
      name: new FormControl('',[Validators.required,Validators.pattern('^\\D*$')]),
      birthday: new FormControl('', Validators.required),
      gender: new FormControl('', [Validators.required]),
      idCard: new FormControl('',[Validators.required,Validators.pattern('^\\d{9}$|^\\d{11}$')]),
      phone: new FormControl('', [Validators.required,Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)\\d{7}$')]),
      email: new FormControl('',[Validators.required,Validators.email]),
      address: new FormControl('',[Validators.required])
    })
  }
  createCustomer() {
    console.log(this.customerForm.value);
    this.customerService.create(this.customerForm.value);
    this.router.navigateByUrl('customer/list');
  }

}
