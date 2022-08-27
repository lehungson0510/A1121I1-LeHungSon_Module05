import {Student} from '../student';

export class StudentDAO {
  static students: Student[] = [{   id: 0,
    address: 'HA',
    age: 18,
    // tslint:disable-next-line:max-line-length
    avatar: 'https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg',
    name: 'Nguyen A',
    mark: 0},
    {   id: 1,
      address: 'DN',
      age: 18,
      // tslint:disable-next-line:max-line-length
      avatar: 'https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg',
      name: 'Nguyen B',
      mark: 0},
    {   id: 2,
      address: 'HCM',
      age: 18,
      // tslint:disable-next-line:max-line-length
      avatar: 'https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg',
      name: 'Nguyen C',
      mark: 0},
    {   id: 3,
      address: 'HN',
      age: 18,
      // tslint:disable-next-line:max-line-length
      avatar: 'https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg',
      name: 'Nguyen D',
      mark: 0}
  ];

  static getAllStudents() {
    return this.students;
  }
}
