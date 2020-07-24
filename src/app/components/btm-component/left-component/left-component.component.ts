import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-left-component',
  templateUrl: './left-component.component.html',
  styleUrls: ['./left-component.component.scss']
})
export class LeftComponentComponent implements OnInit {

  constructor() { }
  @Input() todoFromPapa: ITodo[];
  ngOnInit(): void {
  }

}
