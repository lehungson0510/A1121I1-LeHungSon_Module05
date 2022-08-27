import {Component, OnInit} from '@angular/core';
import {Student} from '../student';
import {StudentDAO} from '../data/studentDAO';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = StudentDAO.getAllStudents();
  parentStudent: Student = new class implements Student {
    address: string;
    age: number;
    avatar: string;
    id: number;
    mark: number;
    name: string;
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  showDetail(id) {
    this.parentStudent.id = id;
    this.parentStudent.name = this.students[id].name;
    this.parentStudent.address = this.students[id].address;
    this.parentStudent.age = this.students[id].age;
    this.parentStudent.avatar = this.students[id].avatar;
    this.parentStudent.mark = this.students[id].mark;
  }

  markChangeHandler(mark: number) {
    this.students[this.parentStudent.id].mark = mark;
  }
}
