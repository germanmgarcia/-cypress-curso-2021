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
});
