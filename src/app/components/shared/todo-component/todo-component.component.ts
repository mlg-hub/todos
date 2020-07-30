import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.scss']
})

export class TodoComponentComponent implements OnInit {

  @Output() finiTodo = new EventEmitter();
  @Output() deleteComp = new EventEmitter();
  @Output() restoreComp = new EventEmitter();
  @Input() myTodo: ITodo;
  @Input() index: number;

  @Input() appartenance: string;
  constructor() {
    this.appartenance = 'left';
  }
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
    if (this.appartenance == "right") {
      //logic qui interesse right comp
      // envoyer au stream et puis the data sera consomé par left;
      console.log("from done", this.index);
      this.restoreComp.emit(this.myTodo);

    } else {
      console.log("i emitted with index", this.index);
      this.finiTodo.emit({ todo: this.myTodo, indexComp: this.index });
    }

  }
  delete() {
    this.deleteComp.emit(this.index);
  }

}
