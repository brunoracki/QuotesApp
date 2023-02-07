import { Component } from '@angular/core';
import { Quote } from '../interfaces/quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})

export class QuotesComponent {
  quote: Quote = {
    id: 1,
    author: 'Bruno Racki',
    text: 'Ti si divlja rijeka, a ja brod u boci'
  };
}


