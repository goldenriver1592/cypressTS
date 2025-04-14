Cypress.Commands.add('login', (email: string, password: string) => {
  cy.visit('/login');
  cy.get('input[formcontrolname=email]').type(email);
  cy.get('input[formcontrolname=password]').type(password);
  cy.get('button[type=submit]').click();
});
