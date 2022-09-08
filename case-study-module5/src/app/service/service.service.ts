import {Injectable} from '@angular/core';
import {ServiceDao} from '../Dao/ServiceDao';
import {IService} from '../model/IService';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() {
  }

  create(service: IService) {
    ServiceDao.serviceList.push(service);
  }

  getAllService() {
    return ServiceDao.serviceList;
  }
}
