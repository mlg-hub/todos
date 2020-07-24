import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ITodo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-btm-component',
  templateUrl: './btm-component.component.html',
  styleUrls: ['./btm-component.component.scss']
})
export class BtmComponentComponent implements OnInit, OnChanges {
  @Input() todoFromParent: ITodo;
  todoArray: ITodo[] = new Array();

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.todoFromParent && !!this.todoFromParent) {
      // inserer dans le array des todos
      this.insertIntoTodos(this.todoFromParent);
    }
    console.log('l\'etat actuel du array todos est:', this.todoArray);
  }
  ngOnInit(): void {
  }

  insertIntoTodos(newTodo: ITodo): void {
    this.todoArray.push(newTodo);
  }

}
