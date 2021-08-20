/// <reference types="Cypress" />;

describe("Elementos de una tabla", () => {
  it("Children", () => {
    const tiempo = 1500;
    cy.visit(
      "https://www.seleniumeasy.com/test/table-records-filter-demo.html"
    );
    cy.title().should("eq", "Selenium Easy - Table Data Filter Demo");
    cy.wait(tiempo);

    cy.get(".btn-group")
      .children(".btn-success")
      .should("contain", "Green")
      .click({ force: true });
    cy.wait(tiempo);
    cy.get(".btn-group")
      .children(".btn-danger")
      .should("contain", "Red")
      .click({ force: true });
    cy.wait(tiempo);
  });
});
