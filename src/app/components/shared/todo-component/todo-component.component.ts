import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.scss']
})

export class TodoComponentComponent implements OnInit {

  myTodo = {
    description: 'test ibi',
    time: '10h',
  };
  constructor() { }

  ngOnInit(): void {
  }

}
