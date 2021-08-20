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
    cy.get("@app").type("García ------");

    cy.get("#age").should("be.visible").as("edad");
    cy.get("#country").should("be.visible").as("pais");
    cy.get("#notes").should("be.visible").as("notas");

    cy.get("@edad").type("40");
    cy.get("@pais").select("Colombia").should("have.value", "Colombia");
    cy.get("@notas").type("Demo del contenido");

    cy.xpath("//input[contains(@type,'submit')]").click({ force: true });
  });
});
