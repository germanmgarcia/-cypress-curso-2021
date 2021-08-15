/// <reference types="Cypress" />;

describe("", () => {
  it("", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.title().should("eq", "My Store");
    cy.wait(1000);

    cy.get("#block_top_menu").contains("Women").click();
  });
});
