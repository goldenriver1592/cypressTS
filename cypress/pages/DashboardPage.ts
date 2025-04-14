export class DashboardPage {
  verifyLoginSuccess(): void {
    cy.contains('conduit').should('be.visible');
  }
}
