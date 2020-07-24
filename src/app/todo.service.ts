import { Injectable } from '@angular/core';
import { ITodo } from './interfaces/todo';
import { Subject } from 'rxjs/internal/Subject';
import { Stream } from 'stream';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  myTodoStream = new Subject<ITodo>();
  myTerminateStream = new Subject<ITodo>();
  data$ = this.myTodoStream.asObservable();
  end$ = this.myTerminateStream.asObservable();
  constructor() { }

  addToMytodo(todo: ITodo): void {
    this.myTodoStream.next(todo);
  }

  saveTerminateTodos(todo: ITodo): void {
    this.myTerminateStream.next(todo);
  }
}
