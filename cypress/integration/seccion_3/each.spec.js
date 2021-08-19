/// <reference types="Cypress" />;

describe("Bucles", () => {
  it("Ciclo de repetición", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.title().should("eq", "My Store");
    cy.wait(1000);

    cy.get(".product-name").each(($el, $index, $list) => {
      cy.log($el.text());
      const vestido = $el.text();
      cy.log(vestido);
    });
  });
});
