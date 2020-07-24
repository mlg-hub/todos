import { Component } from '@angular/core';
import { ITodo } from './interfaces/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todos';
  todoFromTop: ITodo;

  sendtoBtm(todoEvent: ITodo) {
    this.todoFromTop = todoEvent;
    console.log('after event this the result', todoEvent);
  }
}
