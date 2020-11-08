import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes :Quotes[] =[
    new Quotes("William Smith", "I'm an Icon Living!!","Liz Nderitu")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
