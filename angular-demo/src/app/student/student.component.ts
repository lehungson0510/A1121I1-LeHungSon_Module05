import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input()
  student: Student;
  @Output()
  markChange: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  changeMark(value) {
    this.student.mark = value;
    this.markChange.emit(this.student.mark);
  }

}
