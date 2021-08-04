/// <reference types="Cypress" />;

describe("Ejemplo de Type pageUp, pageDown", () => {
  it("Type pageUp", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1500);

    cy.get("#userName").type("{pageup}");
  });

  it("Type pageDown", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1500);

    cy.get("#userName").type("{pagedown}");
  });
});
