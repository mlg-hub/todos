import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ITodo } from 'src/app/interfaces/todo';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-top-component',
  templateUrl: './top-component.component.html',
  styleUrls: ['./top-component.component.scss']
})

// toDoComing -> app.com -> btm
export class TopComponentComponent implements OnInit {
  @Output() toDoComing = new EventEmitter<ITodo>();

  constructor(private todoService: TodoService) { }
  time = '';
  description = '';
  myTodo: ITodo;

  ngOnInit(): void {
  }

  ajouterTodo(): void {

    this.myTodo = { description: this.description, time: this.time };
    // console.log('this is the result', this.myAddTodo);
    if (!!this.myTodo.description && !!this.myTodo.time) {
      this.toDoComing.emit(this.myTodo);
      this.time = '';
      this.description = '';
    }
  }

}
