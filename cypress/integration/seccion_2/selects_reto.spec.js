/// <reference types="Cypress" />;
require("cypress-xpath");

describe("Reto de los Selects", () => {
  it("Reto de Select", () => {
    cy.visit(
      "https://www.seleniumeasy.com/test/jquery-dual-list-box-demo.html"
    );
    cy.title().should("eq", "Selenium Easy - JQuery Dual List Box Demo");
    cy.wait(1000);

    cy.xpath(
      "//select[contains(@class,'form-control pickListSelect pickData')]"
    )
      .select(["Sophia", "Giovanna", "Maria Luiza"])
      .then(() => {
        cy.get(".pAdd")
          .should("be.visible")
          .click()
          .then(() => {
            cy.wait(1000);
            cy.get(".pAddAll")
              .click()
              .then(() => {
                cy.get(".pRemoveAll").click();
                cy.log("Se movieron todos los elementos");
              });
          });
      });
  });
});
