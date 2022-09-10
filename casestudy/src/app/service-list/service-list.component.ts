import {Component, OnInit} from '@angular/core';
import {IService} from "../model/IService";
import {ServiceService} from "../service/service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  page: number = 1;
  temp: IService = {};
  serviceList: IService[] = [];

  constructor(private serviceService: ServiceService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.serviceService.getAll().subscribe(
      (data) => this.serviceList = data
    )
  }

  deleteService(id: number) {
    this.serviceService.delete(id).subscribe(
      () => {
      },
      () => {
      },
      () => {
        this.ngOnInit();
      }
    );
  }
}
