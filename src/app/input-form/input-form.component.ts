import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import {Quotes} from '../quotes';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  quote = new Quotes("","","");
  @Output() addQuote = new EventEmitter<Quotes>();

  submitQuote(){
    this.addQuote.emit(this.quote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
