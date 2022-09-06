import {Injectable} from '@angular/core';
import {StudentDao} from '../student-dao/StudentDao';
import {IStudent} from '../model/IStudent';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() {
  }

  getAll() {
    return StudentDao.getAllStudent();
  }

  create(student: IStudent) {
    StudentDao.students.push(student);
  }

  findById(id: number) {
    return StudentDao.students.find((student) => student.id === id);
  }
}
