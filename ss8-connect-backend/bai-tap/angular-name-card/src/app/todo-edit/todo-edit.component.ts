import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {TodoService} from '../service/todo.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  todo: Todo = {};
  todoForm: FormGroup;

  constructor(private todoService: TodoService,
              private router: Router,
              private activeRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe((param) => {
      // tslint:disable-next-line:radix
      const id = parseInt(param.get('id'));
      this.todoService.findById(id).subscribe(
        (data) => this.todo = data
      );
    });
    this.todoForm = new FormGroup({
        content: new FormControl(this.todo.content),
        complete: new FormControl(this.todo.complete)
      }
    );
  }

  submit(id: number) {
    const todo = this.todoForm.value;
    this.todoService.edit(id, todo).subscribe(
      () => {
      },
      () => {
      },
      () => {
        this.router.navigateByUrl('');
      });
  }
}
