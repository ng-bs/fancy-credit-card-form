import { getGreeting } from '../support/app.po';

describe('atm', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to atm!');
  });
});
