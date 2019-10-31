import { CreditCardFormComponent } from './credit-card-form.component';
import { PaymentUxModule } from '@ngbs/payment-ux';

export default {
  title: 'payment-ux',
};

export const creditCardForm = () => ({
  component: CreditCardFormComponent,
  moduleMetadata: {
    imports: [PaymentUxModule]
  }
});
