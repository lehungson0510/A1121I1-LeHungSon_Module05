import { Component, OnInit } from '@angular/core';
import {ICustomer} from "../model/ICustomer";
import {CustomerDao} from "../Dao/CustomerDao";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: ICustomer[] = CustomerDao.customerList;
  tempId: number;
  tempName: string;
  page: number=1;

  constructor() { }

  ngOnInit(): void {
  }

}
