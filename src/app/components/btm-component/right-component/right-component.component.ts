import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/todo.service';
import { ITodo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-right-component',
  templateUrl: './right-component.component.html',
  styleUrls: ['./right-component.component.scss']
})
export class RightComponentComponent implements OnInit {
  finiTodos: ITodo[] = [];
  indexTokaLeft: number;
  constructor(private todoService: TodoService) {

  }

  ngOnInit(): void {
    this.todoService.end$.subscribe(({ todo, indexFromLeft }) => {
      this.indexTokaLeft = indexFromLeft;
      this.finiTodos.push(todo);
    });
  }

  restaurer(todoRestaurer) {
    console.log("on ibi", todoRestaurer);
    this.todoService.restaurer({ todo: todoRestaurer, index: this.indexTokaLeft });
  }

}
