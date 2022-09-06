import {Component, Input, OnInit} from '@angular/core';
import {IStudent} from '../model/IStudent';
import {StudentService} from '../service/student.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  // @Input() student: IStudent = {
  //   id: 1,
  //   address: 'đà nẵng',
  //   avt: 'https://symbols.vn/wp-content/uploads/2021/12/Cap-nhat-cho-cac-ban-Hinh-dai-dien-avatar-nu-cute.jpg',
  //   mark: 9,
  //   name: 'Sơn'
  // };
  student: IStudent | undefined;

  changeMark(target: any) {
    this.student.mark = target.value;
  }

  constructor(private studentService: StudentService,
              private activeRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe((param) => {
      // tslint:disable-next-line:radix
      const id = parseInt(param.get('id'));
      this.student = this.studentService.findById(id);
    });
  }

}
