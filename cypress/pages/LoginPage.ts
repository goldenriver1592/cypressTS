export class LoginPage {
  visit(): void {
    cy.visit('/login');
  }

  fillEmail(email: string): void {
    cy.get('input[formcontrolname=email]').type(email);
  }

  fillPassword(password: string): void {
    cy.get('input[formcontrolname=password]').type(password);
  }

  submit(): void {
    cy.get('button[type=submit]').click();
  }

  login(email: string, password: string): void {
    this.visit();
    this.fillEmail(email);
    this.fillPassword(password);
    this.submit();
  }
}
