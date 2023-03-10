import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { QuotesComponent } from './quotes/quotes.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives her
import {MatCardModule} from '@angular/material/card';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteDetailComponent,
  ],
  imports: [
    MatCardModule,
    FormsModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 

export class AppModule { }

