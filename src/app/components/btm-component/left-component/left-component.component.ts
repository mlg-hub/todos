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
    this.todoService.restaurer$.subscribe(({ todo, index }) => {
      console.log('from sub', todo, index);
      // ordonner avant d'inserer
      const { description, time } = todo;
      const myTime = time.split('h')[0];
      const todoBigIndex = this.todoFromService.findIndex((todo: ITodo) => {
        const inTime = todo.time.split('h')[0];
        return inTime > myTime;
      });
      console.log("big index", todoBigIndex);
      if (todoBigIndex === -1) {
        this.todoFromService.push(todo);
      } else {
        this.todoFromService.splice(todoBigIndex, 0, todo);
      }

    });
  }

  saveFiniTodo(finiTodo): void {
    // supprimer le todo then envoyer ku service;
    // destructuring in JS;
    // on sait que finiTodo a une structure de {todo: ..., indexComp:..}
    const { todo, indexComp } = finiTodo;
    console.log(' this is the detached value', todo, indexComp);
    this.todoService.saveTerminateTodos({ todo, indexFromLeft: indexComp });
    this.deleteThisComp(indexComp);
  }

  deleteThisComp(index: number) {
    this.todoFromService.splice(index, 1);
  }

}
