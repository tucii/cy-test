//context bloguyla describe blogu ayni  it ile de specify ayni
//bu dosyanin icerisinde describe it birsuru olabilir descruibe suit it ler testler

/// <reference types="cypress" />
describe("Our first suite", () => {
  it("first test", () => {
    //selenium xpath css selector  id selector vs gibi farkli selectorlari desteklerden cypress
    //sadece css selector u destekler kullaniysaniz jquery selectore cok benzer. tabi plugin ekleyerek xpath de
    //kullanabilirsiniz ama dedigim gibi defaultta sadece css,jquery selector.

    cy.visit("/");
    // --------------------------------- Types of Locators ------------------------------
    //By Tag name
    cy.get("input");
    //By id
    cy.get("#auto-complete-app");
    //By classname
    cy.get(".search-box-container");

    //By attribute name
    cy.get("[placeholder]");

    //By attribute name and value
    cy.get('[placeholder="Aradığınız ürün, kategori veya markayı yazınız"');

    //By class value  --> farki o elemette istenilen butun classlar esit olmali
    cy.get('[class="col-lg-3 col-md-3 col-xs-3 no-padding"]');

    //By tag name and attribute with   css selector
    cy.get('input[type="text"]');

    //By two different attribute  multiple attributes
    cy.get(
      '[placeholder="Aradığınız ürün, kategori veya markayı yazınız"][type="text"]'
    );

    // searchbox un ustu autocompletewrapper
    cy.get("#autoCompleteAppWrapper.no-padding");
    cy.get('input[type="text"].search-box');

    //The  most recommenden way by Cypress
    // ("data-cy ile elementlere attribute geciliyor ");
  });

  //only sadece burasi kosucak
  it("Second test", () => {
    cy.visit("/");
    cy.get(".link-text"); //3tane var
    cy.get(".link-text").contains("Sepetim");
    cy.contains(".link-text", "Favorilerim");

    //up to parents find child
    cy.get("#autoCompleteAppWrapper").parents(".wrapper").find(".header");
    cy.get("#autoCompleteAppWrapper").parents(".wrapper");
  });

  // -------------------------------------Saving Subject of the Command --------------------------------------

  it.only("then and wrap test", () => {
    cy.visit("/");
    //Giris yap kontrolu
    cy.get("#account-navigation-container")
      .find(".account-user .link-text")
      .should("contain", "Gir");
    // cy.get(".account-user").find(".link-text").should("have.text", "Giriş Yap");

    //Favorilerim kontrolu
    cy.get("#account-navigation-container")
      .find(".account-favorites .link-text")
      .should("have.text", "Favorilerim");
    //Sepetim kontrolu
    cy.get("#account-navigation-container")
      .find(".basket-preview  .link-text")
      .should("have.text", "Sepetim");

    //selenium da boyle yapiyorduk
    // const accountNavContainer =   cy.get("#account-navigation-container")
    // accountNavContainer.find(".account-user .link-text").should("contain", "Gir");

    //cypress async. cypress te content i ve objeyi kaydedemezsin
    //cypress style
    // thende coıntaınerElement --> oncekinden gelen result
    cy.get("#account-navigation-container").then((containerElement) => {
      // then ile cagirdiktan sonra bu artik cypress objesi degil jquery objesi oluyor.
      //artik icerde rahatca jquery lede erisip text() kullanabiliyor.
      //ustune gelince jquery oldugu goster
      const loginButtonText = containerElement
        .find(".account-user .link-text")
        .text();
      const favButtonText = containerElement
        .find(".account-favorites .link-text")
        .text();
      const basketButtonText = containerElement
        .find(".basket-preview  .link-text")
        .text();

      expect(loginButtonText).to.equal("Giriş Yap");
      expect(favButtonText).to.equal("Favorilerim");
      expect(basketButtonText).to.equal("Sepetim");
    });
  });
});
