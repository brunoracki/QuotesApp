import { Component } from '@angular/core';
import { Quote } from '../interfaces/quote';
import { Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent {
     @Input() quote?: Quote;
  
}
