import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CreditCardFormComponent } from './credit-card-form/credit-card-form.component';
import { CreditCardDisplayComponent } from './credit-card-display/credit-card-display.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [CreditCardFormComponent, CreditCardDisplayComponent],
  exports: [CreditCardFormComponent]
})
export class PaymentUxModule { }
