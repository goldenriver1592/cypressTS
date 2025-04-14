import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

describe('Login with TypeScript', () => {
  beforeEach(() => {
    cy.fixture('users').as('users');
  });

  it('should login successfully', function () {
    loginPage.login(this.users.validUser.email, this.users.validUser.password);
    dashboardPage.verifyLoginSuccess();
  });
});
