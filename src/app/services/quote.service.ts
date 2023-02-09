import { Injectable } from '@angular/core';
import { Quote } from '../interfaces/quote';
import { QUOTES } from '../mock.quotes';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  getQuotes() : Quote[] {
    return QUOTES; // function that returns data from mock (substitution for db)
  }
  constructor() { }
}
