import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  readonly URL_API = 'http://localhost:3000/todo';

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.URL_API);
  }

  save(todo: Todo): Observable<void> {
    return this.http.post<void>(this.URL_API, todo);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.URL_API + '/' + id);
  }

  findById(id: number): Observable<Todo> {
    return this.http.get<Todo>(this.URL_API + '/' + id);
  }

  edit(id: number, todo: Todo): Observable<void> {
    return this.http.patch<void>(this.URL_API + '/' + id, todo);
  }
}


