import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ngbs-credit-card-display',
  templateUrl: './credit-card-display.component.html',
  styleUrls: ['./credit-card-display.component.scss']
})
export class CreditCardDisplayComponent implements OnInit {
  @Input() cardNumber$: Observable<string>;
  cardNumberDisplay: Observable<any>;

  constructor() { }

  ngOnInit() {
    this.cardNumberDisplay = this.cardNumber$.pipe(
      map(cardNumber => {
        const cardNumbers = [...cardNumber]; // cardNumber.split('');
        const length = this.getCardNumberLength(cardNumber);

        return [
          ...cardNumbers,
          ...Array(length - cardNumbers.length).fill('#')
        ];
      })
    );
  }

  getCardNumberLength(cardNumber: string): number {
    return cardNumber.startsWith('4') ? 16 : 16;
  }

}
