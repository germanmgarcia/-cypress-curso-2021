/// <reference types="Cypress" />;
require("cypress-xpath");

describe("Reto asserts", () => {
  it("Reto Asserts", () => {
    const tiempo = 1000;
    cy.visit("https://www.seleniumeasy.com/test/basic-first-form-demo.html");
    cy.title().should(
      "eq",
      "Selenium Easy Demo - Simple Form to Automate using Selenium"
    );
    cy.wait(tiempo);

    //Eliminando ventana
    cy.get(".at-cm-no-button").should("be.visible").click({ force: true });

    cy.get("#sum1")
      .should("be.visible")
      .and("have.class", "form-control")
      .type(10);
    cy.get("#sum2")
      .should("be.visible")
      .and("have.class", "form-control")
      .type(20);
    cy.contains("[type='button']", "Get Total").click();
  });
});
