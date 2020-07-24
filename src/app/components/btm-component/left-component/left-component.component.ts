import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ITodo } from 'src/app/interfaces/todo';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-left-component',
  templateUrl: './left-component.component.html',
  styleUrls: ['./left-component.component.scss']
})
export class LeftComponentComponent implements OnInit {
  todoFromService: ITodo[] = [];
  constructor(private todoService: TodoService) {

  }
  ngOnInit(): void {
    this.todoService.data$.subscribe((value) => {
      this.todoFromService.push(value);
    });
  }

  saveFiniTodo(finiTodo: ITodo): void {
    this.todoService.saveTerminateTodos(finiTodo);
  }

}
