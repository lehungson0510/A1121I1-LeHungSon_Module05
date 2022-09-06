import {Component, OnInit} from '@angular/core';
import {IService} from "../model/IService";
import {ServiceDao} from "../Dao/ServiceDao";

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  page: number =1;
  tempId: number;
  tempName: string;
  serviceList: IService[] = ServiceDao.serviceList;

  constructor() {
  }

  ngOnInit(): void {
  }

  delete(id: number, name: string) {

  }
}
