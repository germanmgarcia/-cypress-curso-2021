/// <reference types="Cypress" />;

describe("Sección 1 validando el título", () => {
  it("Test validar el título", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");
    cy.log("Ok la función títle funcionó bien");
  });
});
