import { Injectable } from '@angular/core';
import {CustomerDao} from "../Dao/CustomerDao";
import {ICustomer} from "../model/ICustomer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  create(customer: ICustomer) {
    CustomerDao.customerList.push(customer);
  }

  getAllCustomer(){
    return CustomerDao.customerList;
  }
}
