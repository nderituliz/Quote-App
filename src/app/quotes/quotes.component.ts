import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes :Quotes[] =[
    new Quotes("William Smith", "I'm an Icon Living!!","Liz Nderitu"),
    new Quotes("Steve Jobs","Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.","Bartholomew Mwangi"),
    new Quotes("Oprah Winfrey","Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.", "Ben Muthike"),
    


  ];

  toggleDetails(index){
    this.quotes[index].showMore = !this.quotes[index].showMore;

  }

  quoteDelete(isRead, index){
    if(isRead){
      this.quotes.splice(index,1);

    }
  }

  addNewQuote(quote){
    let lengthOfQuote = this.quotes.length;
    this.quotes.push(quote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
