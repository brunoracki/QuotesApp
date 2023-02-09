import { Component } from '@angular/core';
import { Quote } from '../interfaces/quote';
import { QUOTES } from '../mock.quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})

export class QuotesComponent {
  selectedQuote?: Quote;
  onSelect(quote: Quote): void {
  this.selectedQuote = quote;
  }
  /*quote: Quote = {
    id: 1,
    author: 'Bruno Racki',
    text: 'Ti si divlja rijeka, a ja brod u boci'
  };*/
  quotes = QUOTES;
}


