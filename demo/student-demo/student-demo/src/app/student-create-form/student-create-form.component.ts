import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {StudentService} from '../service/student.service';
import {IStudent} from '../model/IStudent';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student-create-form',
  templateUrl: './student-create-form.component.html',
  styleUrls: ['./student-create-form.component.css']
})
export class StudentCreateFormComponent implements OnInit {
  studentForm: FormGroup;

  constructor(private studentService: StudentService, private router: Router) {
  }

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      address: new FormControl(),
      avt: new FormControl(),
      mark: new FormControl()
    });
  }

  createStudent($event: any) {
    this.studentService.create(this.studentForm.value);
    this.router.navigateByUrl('');
  }
}
