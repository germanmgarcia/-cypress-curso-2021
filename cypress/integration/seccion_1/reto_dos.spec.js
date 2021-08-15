/// <reference types="Cypress" />;
require("cypress-xpath");
require("cypress-plugin-tab");

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
    cy.get("[name='name']").should("be.visible").type("cypress");
    cy.get("#introduced")
      .should("be.visible")
      .type("2021-03-15")
      .tab()
      .type("2025-03-15");
    //combo
    cy.get("#company")
      .should("be.visible")
      .select("Nokia")
      .should("have.value", "16")
      .wait(1500);
    cy.xpath("//*[@id='main']/form/div/input").should("be.visible").click();

    //buscando
    cy.xpath("//input[contains(@type,'search')]").type("cypress");
    cy.get("#searchsubmit").should("be.visible").click();
  });
});
