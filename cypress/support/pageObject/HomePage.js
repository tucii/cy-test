class HomePage {
  getBoutiqueList() {
    return cy.get(".campaign");
  }

  //   clickToBoutiqueByIndex(index) {
  //     return new Promise((resolve, reject) => {
  //       const boutiqueList = this.getBoutiqueList();
  //       let boutiqueLink = "";
  //       const selectedBoutique = boutiqueList.eq(index);
  //       selectedBoutique.then((el) => {
  //         boutiqueLink = el.prop("href");
  //         selectedBoutique.click();
  //         return resolve(boutiqueLink);
  //         //   cy.log(boutiqueLink).pause();
  //       });
  //     });
  //   }
  clickToLoginButton() {
    return cy.get(".user-login-container").click();
  }

  clickToBoutiqueByIndex(index) {
    const boutiqueList = this.getBoutiqueList();

    return boutiqueList.eq(index).click();
  }

  //   getCampaignName(index){
  //     const boutiqueList = this.getBoutiqueList();
  // return boutiqueList.find(".name")
  //   }
}

export default HomePage;
