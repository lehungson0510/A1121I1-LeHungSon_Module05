import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ServiceService} from "../service/service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-service-create',
  templateUrl: './service-create.component.html',
  styleUrls: ['./service-create.component.css']
})
export class ServiceCreateComponent implements OnInit {
  serviceForm: FormGroup;

  constructor(private serviceService: ServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.serviceForm = new FormGroup({
      id: new FormControl('',[Validators.required]),
      name: new FormControl('',[Validators.required, Validators.pattern('^\\D*$')]),
      area: new FormControl('',[Validators.required , Validators.min(0)]),
      image: new FormControl('',[Validators.required]),
      cost: new FormControl('',[Validators.required, Validators.min(0)]),
      maxPeople: new FormControl('',[Validators.required, Validators.min(0)]),
      rentTypeId: new FormControl('',[Validators.required]),
      serviceTypeId: new FormControl('',[Validators.required]),
      standard: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      poolArea: new FormControl('',[Validators.required, Validators.min(0)]),
      floors: new FormControl('',[Validators.required, Validators.min(0)]),
    })
  }

  createService() {
    console.log(this.serviceForm.value);
    this.serviceService.create(this.serviceForm.value);
    this.router.navigateByUrl('');
  }
}
