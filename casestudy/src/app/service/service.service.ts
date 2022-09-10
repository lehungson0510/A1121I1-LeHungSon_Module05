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
  getAllService() {
    return ServiceDao.serviceList;
  }


  create(service: IService): Observable<void> {
    return this.http.post<void>(this.URL_API, service);
  }

  // create(service: IService) {
  //   ServiceDao.serviceList.push(service);
  // }


  edit(id: number, service: IService) {
    for (let i = 0; i < this.getAllService().length; i++) {
      if (this.getAllService()[i].id === id) {
        this.getAllService()[i] = service;
      }
    }
  }



  findById(id: number) {
    return this.getAllService().find((service) => service.id === id);
  }


  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.URL_API + '/' + id)
  }

  // deleteService(id: number){
  //   for (let i =0; i< this.getAllService().length; i++){
  //     if(this.getAllService()[i].id === id){
  //       this.getAllService().splice(i,1)
  //     }
  //   }
  // }
}
