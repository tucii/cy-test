/// <reference types="cypress" />
import HomePage from "../../support/pageObject/HomePage";
import LoginPage from "../../support/pageObject/LoginPage";
describe("When User trying to Login", function () {
  beforeEach(function () {
    cy.visit("www.trendyol.com");
    cy.fixture("constant").then(function (data) {
      cy.log("data", data);
      this.constant = data;
    });
  });
  it("should show an error", function () {
    const homePage = new HomePage();
    const loginPage = new LoginPage();

    homePage.clickToLoginButton();
    loginPage.typeUserEmail("a");
    loginPage.typeUserPassword("2");
    loginPage.clickToLoginButton();
    cy.get(".message").should(
      "have.text",
      "Lütfen geçerli bir e-posta adresi giriniz."
    );
  });
  it("should see missing char error", function () {
    const homePage = new HomePage();
    const loginPage = new LoginPage();
    homePage.clickToLoginButton();
    loginPage.clickToRegisterTab();
    loginPage.typeUserEmail("bootcamp-testt1@gmail.com");
    loginPage.typeUserPassword(this.constant.missingPassword);
    loginPage.clickToRegisterSubmitButton();
    cy.get(".message").should("have.text", this.constant.missingPasswordError);
  });

  it("should see missing char error", function () {
    const homePage = new HomePage();
    const loginPage = new LoginPage();
    homePage.clickToLoginButton();
    loginPage.clickToRegisterTab();
    loginPage.typeUserEmail(
      `bootcamp-test${Math.floor(100000 + Math.random() * 900000)}@gmail.com`
    );
    loginPage.typeUserPassword(this.constant.missingPassword);
    loginPage.clickToRegisterSubmitButton();
    cy.get(".message").should("have.text", this.constant.missingPasswordError);
  });

  it("should successfully register", function () {
    const homePage = new HomePage();
    const loginPage = new LoginPage();
    homePage.clickToLoginButton();
    loginPage.clickToRegisterTab();
    loginPage.typeUserEmail(
      `bootcamp-test${Math.floor(100000 + Math.random() * 900000)}@gmail.com`
    );
    loginPage.typeUserPassword(this.constant.missingPassword);
    loginPage.clickToRegisterSubmitButton();
    cy.get(".message").should("have.text", this.constant.missingPasswordError);
  });
});
