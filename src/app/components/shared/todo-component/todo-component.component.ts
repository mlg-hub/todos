import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.scss']
})

export class TodoComponentComponent implements OnInit {

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

}
