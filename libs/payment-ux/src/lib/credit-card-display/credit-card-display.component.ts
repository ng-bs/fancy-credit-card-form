import { Component, OnInit, Input } from '@angular/core';
import { trigger, animate, style, state, transition } from '@angular/animations';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'ngbs-credit-card-display',
  templateUrl: './credit-card-display.component.html',
  styleUrls: ['./credit-card-display.component.scss'],
  animations: [
    trigger('flipChar', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(1.5rem) scale(.5)' }),
        animate(200, style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateY(0) scale(1)' }),
        animate(200, style({ opacity: 0, transform: 'translateY(-1.5rem) scale(.5)' }))
      ]),
    ])
  ]
})
export class CreditCardDisplayComponent implements OnInit {
  @Input() cardNumber$: Observable<string>;
  cardNumberDisplay: Observable<any>;

  constructor() { }

  ngOnInit() {
    this.cardNumberDisplay = this.cardNumber$.pipe(
      startWith((new Array(16)).fill('#').join('')),
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

  trackByIndex(item, index) {
    return `${item}-${index}`;
  }

  getCardNumberLength(cardNumber: string): number {
    return cardNumber.startsWith('4') ? 16 : 16;
  }

}
