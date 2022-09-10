import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IService} from "../model/IService";
import {ServiceService} from "../service/service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-service-edit',
  templateUrl: './service-edit.component.html',
  styleUrls: ['./service-edit.component.css']
})
export class ServiceEditComponent implements OnInit {
  serviceForm: FormGroup;
  service: IService = {};

  constructor(private serviceService: ServiceService,
              private route : Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) =>{
      const id = parseInt(param.get('id'));
      this.service = this.serviceService.findById(id);
    })
    this.serviceForm = new FormGroup({
      id: new FormControl(this.service.id,[Validators.required]),
      name: new FormControl(this.service.name,[Validators.required, Validators.pattern('^\\D*$')]),
      area: new FormControl(this.service.area,[Validators.required , Validators.min(0)]),
      image: new FormControl(this.service.image,[Validators.required]),
      cost: new FormControl(this.service.cost,[Validators.required, Validators.min(0)]),
      maxPeople: new FormControl(this.service.maxPeople,[Validators.required, Validators.min(0)]),
      rentTypeId: new FormControl(this.service.rentTypeId,[Validators.required]),
      serviceTypeId: new FormControl(this.service.serviceTypeId,[Validators.required]),
      standard: new FormControl(this.service.standard,[Validators.required]),
      description: new FormControl(this.service.description,[Validators.required]),
      poolArea: new FormControl(this.service.poolArea,[Validators.required, Validators.min(0)]),
      floors: new FormControl(this.service.floors,[Validators.required, Validators.min(0)]),
    })
  }

  edit(id: number) {
    const value = this.serviceForm.value;
    this.serviceService.edit(id, value);
    this.route.navigateByUrl('');
  }
}
