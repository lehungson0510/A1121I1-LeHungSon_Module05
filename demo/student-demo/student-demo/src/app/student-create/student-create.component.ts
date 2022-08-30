import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IStudent} from '../model/IStudent';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  @Output() submitStudent = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  addStudentCreate(id: string, name: string, address: string, avt: string, mark: any) {
    const student: IStudent = {id: parseInt(id), name: name, address: address, avt: avt, mark: parseInt(mark)};
    this.submitStudent.emit(student);

  }
}
