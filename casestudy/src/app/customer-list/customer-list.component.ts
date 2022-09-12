import {Component, OnInit} from '@angular/core';
import {ICustomer} from "../model/ICustomer";
import {CustomerDao} from "../Dao/CustomerDao";
import {CustomerService} from "../service/customer.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: ICustomer[] = [];
  page: number = 1;
  temp: ICustomer = {};

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getAllCustomer();
  }

  getAllCustomer(){
    this.customerService.getAll().subscribe(
      (data) => this.customerList = data
    )
  }

  deleteCustomer(id: number) {
    this.customerService.delete(id).subscribe(
      () => {
      },
      () => {
      },
      () => {
        this.ngOnInit();
        alert('Xóa thành công')
      }
    );
  }
}
