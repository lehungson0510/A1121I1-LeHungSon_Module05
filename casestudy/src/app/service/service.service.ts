import {Injectable} from '@angular/core';
import {ServiceDao} from "../Dao/ServiceDao";
import {IService} from "../model/IService";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private URL_API = 'http://localhost:3000/services';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IService[]> {
    return this.http.get<IService[]>(this.URL_API);
  }

  create(service: IService): Observable<void> {
    return this.http.post<void>(this.URL_API, service);
  }

  edit(id : number, service: IService): Observable<void>{
    return this.http.patch<void>(this.URL_API + '/' + id, service)
  }

  findById(id: number): Observable<IService> {
    return this.http.get<IService>(this.URL_API + '/' + id);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.URL_API + '/' + id)
  }
}
