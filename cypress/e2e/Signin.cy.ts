/// <reference types="cypress" />

describe('Sign in form E2E', () => {
  beforeEach(() => {
    cy.visit('/signin');
  });

  it('sign up form works', () => {
    const form = cy.get('[data-testid=signIn-form]');
    const emailField = cy.get('[data-testid=email-field]');
    const passwordField = cy.get('[data-testid=password-field]');
    const button = cy.get('[data-testid=signIn-button]');

    form.should('be.visible');

    cy.get('[data-testid=email-field]').should('not.have.value');
    cy.get('[data-testid=password-field]').should('not.have.value');
    cy.get('[data-testid=signIn-button]').should('be.disabled');

    emailField.click();
    cy.focused().type('email@mail.com').should('have.value', 'email@mail.com');

    passwordField.click();
    cy.focused().type('Pass').should('have.value', 'Pass');

    button.should('be.enabled');

    passwordField.click();
    cy.focused().type('{backspace}{backspace}{backspace}{backspace}');

    cy.get('[data-testid=signIn-button]').should('be.disabled');

    passwordField.click();
    cy.focused().type('Password123!');

    button.should('be.enabled');
  });
});
