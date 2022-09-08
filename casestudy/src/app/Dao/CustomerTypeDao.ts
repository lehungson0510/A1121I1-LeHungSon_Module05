import {ICustomerType} from "../model/ICustomerType";

export class CustomerTypeDao {
  customerTypeList: ICustomerType[] = [{
    id : 1,
    name: 'Diamond'
  },
    {
      id : 2,
      name: 'Platinum'
    },
    {
      id : 3,
      name: 'Gold'
    },
    {
      id : 4,
      name: 'Silver'
    },
    {
      id : 5,
      name: 'Member'
    }]
}
