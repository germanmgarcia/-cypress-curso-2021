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

  it("Seleccionar por medio de EQ", () => {
    const tiempo = 1500;
    cy.visit(
      "https://www.seleniumeasy.com/test/table-records-filter-demo.html"
    );
    cy.title().should("eq", "Selenium Easy - Table Data Filter Demo");
    cy.wait(tiempo);

    cy.get("[type='button']")
      .eq(2)
      .should("contain", "Orange")
      .click({ force: true });
    cy.wait(tiempo);
    cy.get("[type='button']")
      .eq(4)
      .should("contain", "All")
      .click({ force: true });
  });

  it.only("Filter", () => {
    const tiempo = 1500;
    cy.visit(
      "https://www.seleniumeasy.com/test/table-records-filter-demo.html"
    );
    cy.title().should("eq", "Selenium Easy - Table Data Filter Demo");
    cy.wait(tiempo);

    cy.get("[type='button']").filter(".btn-warning");
    cy.get("[type='button']").filter(".btn-success");
    cy.wait(tiempo);
    cy.get("[type='button']").filter(".btn-warning").click();
    cy.wait(tiempo);
    cy.get("[type='button']")
      .filter(".btn-success")
      .should("contain", "Green")
      .click();
  });
});
