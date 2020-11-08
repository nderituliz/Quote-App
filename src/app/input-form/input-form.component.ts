import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
