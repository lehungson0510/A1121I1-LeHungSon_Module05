import {Injectable} from '@angular/core';
import {ContractDao} from '../Dao/ContractDao';
import {IContract} from '../model/IContract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor() {
  }

  createContract(contract: IContract) {
    ContractDao.contractList.push(contract);
  }

  getAllContract() {
    return ContractDao.contractList;
  }
}
