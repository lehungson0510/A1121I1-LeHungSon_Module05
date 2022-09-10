import { Injectable } from '@angular/core';
import {ContractDao} from "../Dao/ContractDao";
import {IContract} from "../model/IContract";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  readonly URL_API = 'http://localhost:3000/contracts';

  constructor(private http: HttpClient) { }

  createContract(contract: IContract): Observable<void>{
    return this.http.post<void>(this.URL_API, contract)
  }

  getAllContract(): Observable<IContract[]>{
    return this.http.get<IContract[]>(this.URL_API)
  }
}
