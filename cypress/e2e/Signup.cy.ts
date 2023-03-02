/// <reference types="cypress" />

describe('Sign up form E2E', () => {
  beforeEach(() => {
    cy.visit('/signup');
  });

  it('sign up form works', () => {
    const form = cy.get('[data-testid=signUp-form]');
    const nameField = cy.get('[data-testid=name-field]');
    const emailField = cy.get('[data-testid=email-field]');
    const passwordField = cy.get('[data-testid=password-field]');
    const button = cy.get('[data-testid=signIn-button]');

    form.should('be.visible');

    cy.get('[data-testid=name-field]').should('not.have.value');
    cy.get('[data-testid=email-field]').should('not.have.value');
    cy.get('[data-testid=password-field]').should('not.have.value');
    cy.get('[data-testid=signIn-button]').should('be.disabled');

    nameField.click();
    cy.focused().type('name').should('have.value', 'name');

    emailField.click();
    cy.focused().type('email@mail.com').should('have.value', 'email@mail.com');

    passwordField.click();
    cy.focused().type('Password123!').should('have.value', 'Password123!');

    button.should('be.enabled');

    nameField.click();
    cy.focused().type('{backspace}{backspace}{backspace}{backspace}');

    cy.get('[data-testid=signIn-button]').should('be.disabled');

    nameField.click();
    cy.focused().type('user');

    button.should('be.enabled');
  });
});
