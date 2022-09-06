import {Component, OnInit} from '@angular/core';
import {IStudent} from '../model/IStudent';
import {StudentDao} from '../student-dao/StudentDao';
import {StudentService} from '../service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: IStudent[] | undefined;

  // temp: IStudent;

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.students = this.studentService.getAll();
  }

  // addStudent(student: IStudent) {
  //   this.students.push(student);
  // }
}
