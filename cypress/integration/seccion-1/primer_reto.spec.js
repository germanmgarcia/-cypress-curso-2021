/// <reference types="Cypress" />;

describe("Primer Reto", () => {
  it("", () => {
    cy.visit("https://demoqa.com/webtables");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1500);

    cy.get("#searchBox").should("be.visible").type("Cierra");
    cy.wait(1500);
    cy.get("#searchBox").should("be.visible").clear();
  });
});
