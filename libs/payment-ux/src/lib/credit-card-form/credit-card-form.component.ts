import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, RequiredValidator, FormGroup, Validators } from '@angular/forms';

export interface CreditCardInfo {
  cardNumber: string;
  cardholder: string;
  expirationMonth: string;
  expirationYear: string;
  cvv: string;
}

@Component({
  selector: 'ngbs-credit-card-form',
  templateUrl: './credit-card-form.component.html',
  styleUrls: ['./credit-card-form.component.scss']
})
export class CreditCardFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<CreditCardInfo>();
  creditCardFormGroup: FormGroup;
  months: string[];
  years: string[];
  showBack = false;

  constructor(private formBuilder: FormBuilder) { }
  /* JUSTIN'S CREDIT CARD #
        4111111111111111
  GO BUY YOURSELF SOMETHING NICE 😂💰
  */
  ngOnInit() {
    this.creditCardFormGroup = this.formBuilder.group({
      cardNumber: ['',
        Validators.compose([
          Validators.required,
          Validators.minLength(15),
          Validators.maxLength(16),
          Validators.pattern(/^[0-9]*$/)
        ])],
      cardholder: ['', Validators.required],
      expirationMonth: ['', Validators.required],
      expirationYear: ['', Validators.required],
      cvv: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(4),
        Validators.pattern(/^[0-9]*$/)
      ])],
    });

    this.months = [...Array(12).keys()].map(x => (++x).toString());
    this.years = [];
    const thisYear = new Date().getFullYear();
    this.years = [...Array(10).keys()].map(x => (thisYear + x).toString());
  }

  onSubmitted(formGroup: FormGroup) {
    // additional validation here
    this.submitted.emit(formGroup.value);
  }

  getCreditCardType(cardNumber: string): 'Visa' | 'Amex' | 'Mastercard' | 'Discover' {
    return 'Visa';
  }
}
