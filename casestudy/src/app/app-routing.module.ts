import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServiceListComponent} from "./service-list/service-list.component";
import {ServiceCreateComponent} from "./service-create/service-create.component";
import {ServiceEditComponent} from "./service-edit/service-edit.component";
import {CustomerListComponent} from "./customer-list/customer-list.component";
import {CustomerCreateComponent} from "./customer-create/customer-create.component";
import {CustomerEditComponent} from "./customer-edit/customer-edit.component";
import {ContractListComponent} from "./contract-list/contract-list.component";
import {ContractCreateComponent} from "./contract-create/contract-create.component";


const routes: Routes = [
  {path:'', component: ServiceListComponent},
  {path:'service/create', component: ServiceCreateComponent},
  {path:'service/edit', component: ServiceEditComponent},
  {path:'customer/list', component: CustomerListComponent},
  {path:'customer/create',component: CustomerCreateComponent},
  {path:'customer/edit', component: CustomerEditComponent},
  {path: 'contract/list', component: ContractListComponent},
  {path:'contract/create', component: ContractCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
