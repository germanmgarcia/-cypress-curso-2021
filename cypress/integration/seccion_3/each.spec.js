/// <reference types="Cypress" />;
require("cypress-xpath");

describe("Bucles", () => {
  it("Ciclo de repetición", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.title().should("eq", "My Store");
    cy.wait(1000);

    cy.get(".product-name").each(($el, $index, $list) => {
      //   cy.log($el.text());
      const vestido = $el.text();
      cy.log(vestido);
    });
  });

  it("Ciclo de each, click al elemeto", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.title().should("eq", "My Store");
    cy.wait(1000);

    cy.get(".product-name").each(($el, $index, $list) => {
      //   cy.log($el.text());
      const vestido = $el.text();
      if (vestido.includes("Printed Summer Dress")) {
        cy.wrap($el).click();
      }
    });
  });

  it.only("Ciclo de each, reto", () => {
    const tiempo = 500;
    cy.visit("http://automationpractice.com/index.php");
    cy.title().should("eq", "My Store");
    cy.wait(tiempo);

    for (let x = 0; x <= 3; x++) {
      cy.get("#center_column .product-name").eq(x).click({ force: true });
      cy.wait(tiempo);
      cy.get("#quantity_wanted").should("be.visible").clear().type("4");
      cy.get("#group_1").select("M").should("have.value", "2");
      cy.wait(tiempo);
      cy.get(".exclusive > span").should("be.visible").click({ force: true });
      cy.wait(tiempo);
      cy.xpath("//span[contains(.,'Proceed to checkout')]").click({
        force: true,
      });
      cy.xpath("//i[contains(@class,'icon-home')]")
        .should("be.visible")
        .click({ force: true });
    }
  });
});
