/// <reference types="Cypress" />;

describe("Tipos de Selectores", () => {
  it("Selector por id", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1000);

    //selector por id
    cy.get("#userName").should("be.visible").type("Germán");
    cy.get("#userEmail").should("be.visible").type("demo@gmail.com");
  });
});
