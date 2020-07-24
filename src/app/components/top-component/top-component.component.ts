import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ITodo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-top-component',
  templateUrl: './top-component.component.html',
  styleUrls: ['./top-component.component.scss']
})

// toDoComing -> app.com -> btm
export class TopComponentComponent implements OnInit {
  @Output() toDoComing = new EventEmitter<ITodo>();

  constructor() { }
  time = '';
  description = '';
  myTodo: ITodo;

  ngOnInit(): void {
  }

  ajouterTodo(): void {
    this.myTodo = { description: this.description, time: this.time };
    // console.log('this is the result', this.myAddTodo);
    this.toDoComing.emit(this.myTodo);
  }

}
