/// <reference types="cypress" />
import HomePage from "../../support/pageObject/HomePage";
import LoginPage from "../../support/pageObject/LoginPage";
describe("When User in HomePage", () => {
  //   it("should successully go to boutique page", async () => {
  //     cy.visit("www.trendyol.com");
  //     const homePage = new HomePage();
  //     // homePage.getBoutiqueList().boutiqueEl.eq(0).click();
  //     // cy.log(homePage.getBoutiqueList().boutiqueLink);
  //     const boutiqueUrl = await homePage.clickToBoutiqueByIndex(0);
  //     cy.url().should("eq", boutiqueUrl);
  //   });

  it("bla", () => {
    cy.visit("www.trendyol.com");
    const homePage = new HomePage();
    homePage.clickToLoginButton();
    const loginPage = new LoginPage();
    loginPage.typeUserEmail("a");
    loginPage.typeUserPassword("2");
    loginPage.clickToLoginButton();
    cy.get(".message").should(
      "have.text",
      "Lütfen geçerli bir e-posta adresi giriniz."
    );
  });
});
