import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ProductListComponent} from './product-list/product-list.component';


const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'product/create', component: ProductCreateComponent},
  {path: 'product/edit/:id', component: ProductEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
