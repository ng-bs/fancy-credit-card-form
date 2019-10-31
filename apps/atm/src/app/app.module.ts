import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PaymentUxModule } from '@ngbs/payment-ux';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    PaymentUxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
