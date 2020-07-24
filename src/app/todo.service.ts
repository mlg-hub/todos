import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ITodo } from './interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  myTodoStream = new BehaviorSubject<ITodo>({ description: 'init', time: 'init' });
  data$ = this.myTodoStream.asObservable();

  constructor() { }

  addToMytodo(todo: ITodo) {
    this.myTodoStream.next(todo);
  }
}
