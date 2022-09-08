import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ContractCreateComponent} from './contract-create/contract-create.component';
import {ContractListComponent} from './contract-list/contract-list.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ServiceCreateComponent} from './service-create/service-create.component';
import {ServiceEditComponent} from './service-edit/service-edit.component';
import {ServiceListComponent} from './service-list/service-list.component';
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    AppComponent,
    ContractCreateComponent,
    ContractListComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    CustomerListComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    ServiceCreateComponent,
    ServiceEditComponent,
    ServiceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
