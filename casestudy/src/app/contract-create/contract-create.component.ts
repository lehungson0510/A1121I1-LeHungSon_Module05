import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ContractService} from "../service/contract.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contractForm: FormGroup;

  constructor(private contractService: ContractService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.contractForm = new FormGroup({
      id: new FormControl(''),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      deposit: new FormControl('', [Validators.required, Validators.min(0)]),
      totalMoney: new FormControl('', [Validators.required, Validators.min(0)]),
      employeeId: new FormControl('', [Validators.required]),
      customerId: new FormControl('', [Validators.required]),
      serviceId: new FormControl('', [Validators.required]),
    })
  }

  createContract() {
    console.log(this.contractForm.value);
    const value = this.contractForm.value;
    this.contractService.createContract(value).subscribe(
      () => {
      },
      () => {
      },
      () => {
        this.router.navigateByUrl('/contract/list')
      },
    );
  }
}
