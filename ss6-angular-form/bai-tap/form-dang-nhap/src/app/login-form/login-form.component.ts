import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z]\\w*@gmail+\\.[a-z]+$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  login() {
    console.log(this.loginForm.value);
    this.loginForm.reset();
  }
}
