import {Component, Input, OnInit} from '@angular/core';
import {IStudent} from '../model/IStudent';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  @Input() student: IStudent = {
    id: 1,
    address: 'đà nẵng',
    avt: 'https://symbols.vn/wp-content/uploads/2021/12/Cap-nhat-cho-cac-ban-Hinh-dai-dien-avatar-nu-cute.jpg',
    mark: 9,
    name: 'Sơn'
  };
  changeMark(target: any) {
    this.student.mark = target.value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
