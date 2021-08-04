/// <reference types="Cypress" />;

describe("Introducción a los assert", () => {
  it("Demo de los Asserts", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1000);

    cy.get("#userName").should("be.visible").type("Nombre");
    cy.wait(1000);
    cy.get("#userEmail").should("be.visible").type("nombre@gmail.com");
    cy.wait(1000);
    cy.get("#currentAddress")
      .should("be.visible")
      .should("be.enabled")
      .type("Campo");
  });
});
