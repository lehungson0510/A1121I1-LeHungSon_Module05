import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../service/customer.service';
import {Router} from '@angular/router';

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
    // this.customerForm = new FormGroup({
    //   id: new FormControl(),
    //   typeId: new FormControl(),
    //   name: new FormControl(),
    //   birthday: new FormControl(),
    //   gender: new FormControl(),
    //   idCard: new FormControl(),
    //   phone: new FormControl(),
    //   email: new FormControl(),
    //   address: new FormControl()
    // });
  }
  // createCustomer($event: any) {
  //   this.customerService.create(this.customerForm.value);
  //   this.router.navigateByUrl('customer/list');
  // }

}
