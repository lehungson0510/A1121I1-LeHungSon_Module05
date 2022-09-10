import { Injectable } from '@angular/core';
import {CustomerDao} from "../Dao/CustomerDao";
import {ICustomer} from "../model/ICustomer";
import {Observable} from "rxjs";
import {IService} from "../model/IService";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  readonly URL_API = 'http://localhost:3000/customers';

  constructor(private http: HttpClient) { }

  getAll(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.URL_API);
  }

  create(customer: ICustomer): Observable<void> {
    return this.http.post<void>(this.URL_API, customer);
  }

  edit(id : number, customer: ICustomer): Observable<void>{
    return this.http.patch<void>(this.URL_API + '/' + id, customer)
  }

  findById(id: number): Observable<ICustomer> {
    return this.http.get<ICustomer>(this.URL_API + '/' + id);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.URL_API + '/' + id)
  }
}
