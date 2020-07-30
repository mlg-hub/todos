import { Injectable } from '@angular/core';
import { ITodo } from './interfaces/todo';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  myTodoStream = new Subject<ITodo>();
  myTerminateStream = new Subject();
  myRestoreStream = new Subject();
  data$ = this.myTodoStream.asObservable();
  end$ = this.myTerminateStream.asObservable();
  restaurer$ = this.myRestoreStream.asObservable();
  constructor() { }

  addToMytodo(todo: ITodo): void {
    this.myTodoStream.next(todo);
  }

  saveTerminateTodos(todoToDeleteWithIndex): void {
    this.myTerminateStream.next(todoToDeleteWithIndex);
  }

  restaurer(todoWithIndex): void {
    console.log("on restaure", todoWithIndex);
    this.myRestoreStream.next(todoWithIndex);
  }


}
