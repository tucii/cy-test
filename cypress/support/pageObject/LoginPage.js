class LoginPage {
  typeUserEmail(email) {
    return cy.get('[data-testid="email-input"]').type(email);
  }
  typeUserPassword(password) {
    return cy.get('[data-testid="password-input"]').type(password);
  }
  clickToLoginButton() {
    return cy.get(".q-primary").click();
  }

  clickToRegisterTab() {
    return cy.get(".right > span").click();
  }
  clickToRegisterSubmitButton() {
    return cy.get('[data-testid="submit-button"]').click();
  }
}

export default LoginPage;
