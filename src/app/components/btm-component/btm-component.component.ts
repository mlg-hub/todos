import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-btm-component',
  templateUrl: './btm-component.component.html',
  styleUrls: ['./btm-component.component.scss']
})
export class BtmComponentComponent implements OnInit {

  constructor() { }
  @Input() todoFromParent: ITodo;
  ngOnInit(): void {
  }

}
