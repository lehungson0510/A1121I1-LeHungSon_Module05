import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm: FormGroup;

  constructor() { }

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

  editCustomer() {

  }
}
