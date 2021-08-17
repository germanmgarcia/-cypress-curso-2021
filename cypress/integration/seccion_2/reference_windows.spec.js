/// <reference types="Cypress" />;

describe("Referencias a Windows", () => {
  it("Windows propiedades charset", () => {
    cy.visit("https://testsheepnz.github.io/random-number.html");
    cy.title().should("eq", "The Number Game");
    cy.wait(1500);

    cy.document().should("have.property", "charset").and("eq", "UTF-8");
  });
});
