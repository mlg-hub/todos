import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.scss']
})

export class TodoComponentComponent implements OnInit {

  @Output() finiTodo = new EventEmitter<ITodo>();
  @Input() myTodo: ITodo;
  constructor() { }
  isEditMode = false;
  ngOnInit(): void {
  }

  edit() {
    this.isEditMode = !this.isEditMode;
  }
  save() {
    this.isEditMode = !this.isEditMode;
  }
  done() {
    this.finiTodo.emit(this.myTodo);
  }

}
