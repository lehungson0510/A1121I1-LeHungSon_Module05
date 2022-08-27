import {Component, OnInit} from '@angular/core';
import {IStudent} from '../model/IStudent';
import {StudentDao} from '../student-dao/StudentDao';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: IStudent[] = StudentDao.students;

  constructor() {
  }

  ngOnInit(): void {
  }

}
