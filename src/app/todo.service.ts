import { Injectable } from '@angular/core';
import { ITodo } from './interfaces/todo';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  myTodoStream = new Subject<ITodo>();
  data$ = this.myTodoStream.asObservable();

  constructor() { }

  addToMytodo(todo: ITodo): void {
    this.myTodoStream.next(todo);
  }
}
