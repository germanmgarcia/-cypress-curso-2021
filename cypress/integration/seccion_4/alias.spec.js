/// <reference types="Cypress" />;
require("cypress-xpath");

describe("Manejo de Alias", () => {
  it("Modal", () => {
    const tiempo = 2000;
    cy.visit(
      "https://testpages.herokuapp.com/styled/validation/input-validation.html"
    );
    cy.title().should("eq", "Input Validation");
    cy.wait(tiempo);

    cy.get("#firstname").should("be.visible").as("nom");
    cy.get("@nom").type("Germán");

    cy.get("#surname").should("be.visible").as("app");
    cy.get("@app").type("García");
  });
});
