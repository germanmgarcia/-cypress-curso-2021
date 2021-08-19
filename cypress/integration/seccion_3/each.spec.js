/// <reference types="Cypress" />;

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
    const tiempo = 1500;
    cy.visit("http://automationpractice.com/index.php");
    cy.title().should("eq", "My Store");
    cy.wait(1000);

    for (let x = 0; x <= 3; x++) {
      cy.get("#center_column .product-name").eq(x).click({ force: true });
      cy.wait(tiempo);
      cy.get("#quantity_wanted").should("be.visible").clear().type("4");
      cy.get("#group_1").select("M").should("have.value", "2");
    }
  });
});
