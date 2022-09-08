import {IContract} from "../model/IContract";

export class ContractDao {
  static contractList: IContract[] = [{
    id: 1,
    startDate: '2000-10-05',
    endDate: '2100-10-05',
    deposit: 10000,
    totalMoney: 100000,
    employeeId: 1,
    customerId: 1,
    serviceId: 1
  },
    {
      id: 2,
      startDate: '2000-10-05',
      endDate: '2100-10-05',
      deposit: 10000,
      totalMoney: 100000,
      employeeId: 2,
      customerId: 2,
      serviceId: 2
    },
    {
      id: 3,
      startDate: '2000-10-05',
      endDate: '2100-10-05',
      deposit: 10000,
      totalMoney: 100000,
      employeeId: 3,
      customerId: 3,
      serviceId: 3
    },
    {
      id: 4,
      startDate: '2000-10-05',
      endDate: '2100-10-05',
      deposit: 10000,
      totalMoney: 100000,
      employeeId: 1,
      customerId: 4,
      serviceId: 3
    },
    {
      id: 5,
      startDate: '2000-10-05',
      endDate: '2100-10-05',
      deposit: 10000,
      totalMoney: 100000,
      employeeId: 2,
      customerId: 3,
      serviceId: 2
    }]
}
