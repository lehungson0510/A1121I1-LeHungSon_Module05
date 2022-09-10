import {Component, OnInit} from '@angular/core';
import {IContract} from "../model/IContract";
import {ContractDao} from "../Dao/ContractDao";
import {IEmployee} from "../model/IEmployee";
import {EmployeeDao} from "../Dao/EmployeeDao";
import {ICustomer} from "../model/ICustomer";
import {CustomerDao} from "../Dao/CustomerDao";
import {IService} from "../model/IService";
import {ServiceDao} from "../Dao/ServiceDao";
import {ContractService} from "../service/contract.service";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contractList: IContract[];
  page: number = 1;

  constructor(private contractService: ContractService) {
  }

  ngOnInit(): void {
    this.contractService.getAllContract().subscribe(
      (data) => this.contractList = data
    )
  }

}
