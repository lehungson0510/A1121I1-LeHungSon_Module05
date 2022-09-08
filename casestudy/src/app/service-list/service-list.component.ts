import {Component, OnInit} from '@angular/core';
import {IService} from "../model/IService";
import {ServiceService} from "../service/service.service";

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  page: number = 1;
  tempId: number;
  tempName: string;
  serviceList: IService[];

  constructor(private serviceService: ServiceService) {
  }

  ngOnInit(): void {
    this.serviceList = this.serviceService.getAllService();
  }
}
