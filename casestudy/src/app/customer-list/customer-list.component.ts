import {Component, OnInit} from '@angular/core';
import {ICustomer} from "../model/ICustomer";
import {CustomerDao} from "../Dao/CustomerDao";
import {CustomerService} from "../service/customer.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: ICustomer[];
  tempId: number;
  tempName: string;
  page: number = 1;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.customerList = this.customerService.getAllCustomer()
  }

}
