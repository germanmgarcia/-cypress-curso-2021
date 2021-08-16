/// <reference types="Cypress" />;

describe("Asserts", () => {
  it("Assert contains", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.title().should("eq", "My Store");
    cy.wait(1000);

    cy.get("#block_top_menu").contains("Women").click();
  });

  it("Assert find, eq", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.title().should("eq", "My Store");
    cy.wait(1000);

    cy.get(".product-container").find(".product-image-container").eq(0).click();
  });

  it.only("Assert find, eq, validando que el vestido es nuevo", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.title().should("eq", "My Store");
    cy.wait(1000);

    cy.get(".product-container").find(".product-image-container").eq(2).click();

    cy.get("#product_condition .editable").then((e) => {
      let estado = e.text();
      if (estado === "New") {
        cy.log("El vestido es Nuevo");
      }
    });
  });
});
