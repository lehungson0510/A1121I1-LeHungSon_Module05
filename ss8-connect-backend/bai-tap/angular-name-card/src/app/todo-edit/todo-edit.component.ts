import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {TodoService} from '../service/todo.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  todo: Todo = {};
  todoForm: FormGroup;
  idEit: number;

  constructor(private todoService: TodoService,
              private router: Router,
              private activeRouter: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe((param) => {
      // tslint:disable-next-line:radix
      this.idEit = parseInt(param.get('id'));
      this.todoService.findById(this.idEit).subscribe(
        (data) => {
          this.todo = data;
          this.todoForm = new FormGroup({
            content: new FormControl(this.todo.content)
          });
        });
    });
  }

  submit(idUpdate: number) {
    const todo = this.todoForm.value;
    this.todo = {
      content: todo,
      complete: false
    };
    this.todoService.edit(idUpdate, todo).subscribe(
      () => {
      },
      () => {
      },
      () => {
        this.router.navigateByUrl('');
      });
  }
}
