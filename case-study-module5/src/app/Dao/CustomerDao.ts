import {ICustomer} from "../model/ICustomer";

export class CustomerDao {
  static customerList: ICustomer[] = [{
    id: 1,
    typeId: 1,
    name: 'Lê Sơn',
    birthday:'2000-10-05',
    gender: 1,
    phone: '0123456789',
    email:'a@gmail.com',
    address: 'Huế',
    idCard: '000111222'
  },
    {
      id: 2,
      typeId: 2,
      name: 'Hùng Sơn',
      birthday:'2000-10-05',
      gender: 2,
      phone: '0123456789',
      email:'a@gmail.com',
      address: 'Huế',
      idCard: '111222333'
    },
    {
      id: 3,
      typeId: 1,
      name: 'Sơn Lê',
      birthday:'2000-10-05',
      gender: 1,
      phone: '0123456789',
      email:'a@gmail.com',
      address: 'Huế',
      idCard: '222333444'
    },
    {
      id: 4,
      typeId: 2,
      name: 'Sơn Hùng',
      birthday:'2000-10-05',
      gender: 3,
      phone: '0123456789',
      email:'a@gmail.com',
      address: 'Huế',
      idCard: '33444555'
    },
    {
      id: 5,
      typeId: 1,
      name: 'Lê Hùng',
      birthday:'2000-10-05',
      gender: 2,
      phone: '0123456789',
      email:'a@gmail.com',
      address: 'Huế',
      idCard: '444555666'
    }]
}
