/// <reference types="Cypress" />;
require("cypress-xpath");

describe("Segundo Reto", () => {
  it("Probando la aplicación", () => {
    cy.visit("https://computer-database.gatling.io/computers");
    cy.title().should("eq", "Computers database");
    cy.wait(1500);

    //buscando
    cy.xpath("//input[contains(@type,'search')]").type("ACE");
    cy.get("#searchsubmit").should("be.visible").click();

    //agregando
    cy.get("#add").should("be.visible").click();
  });
});
