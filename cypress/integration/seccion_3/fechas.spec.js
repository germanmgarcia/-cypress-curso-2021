/// <reference types="Cypress" />;
require("cypress-plugin-tab");

describe("Campos de tipo fecha", () => {
  it("Fecha uno {esc}", () => {
    cy.visit(
      "https://www.seleniumeasy.com/test/bootstrap-date-picker-demo.html"
    );
    cy.title().should(
      "eq",
      "Selenium Easy - Best Demo website for Bootstrap Date picker"
    );
    cy.wait(1500);

    cy.get("#sandbox-container1 > .input-group > .form-control")
      .should("be.visible")
      .type("15/08/2021")
      .then(() => {
        cy.get("#sandbox-container1 > .input-group > .form-control")
          .should("be.visible")
          .type("{esc}");
      });

    //Elemento seleccionable
    cy.get(".input-group-addon > .glyphicon").click();
    cy.wait(1500);
    cy.get(".today").first().click({ force: true });
  });

  it("Rango de fechas", () => {
    cy.visit(
      "https://www.seleniumeasy.com/test/bootstrap-date-picker-demo.html"
    );
    cy.title().should(
      "eq",
      "Selenium Easy - Best Demo website for Bootstrap Date picker"
    );
    cy.wait(1500);

    cy.get("[placeholder='Start date']")
      .should("be.visible")
      .type("15/08/2021 {esc}");
    cy.get("[placeholder='End date']")
      .should("be.visible")
      .type("15/08/2021 {esc}");
  });

  it.only("Rango de fechas con tab", () => {
    cy.visit(
      "https://www.seleniumeasy.com/test/bootstrap-date-picker-demo.html"
    );
    cy.title().should(
      "eq",
      "Selenium Easy - Best Demo website for Bootstrap Date picker"
    );
    cy.wait(1500);

    cy.get("[placeholder='Start date']")
      .should("be.visible")
      .type("15/08/2021 {esc}")
      .tab()
      .type("15/08/2021 {esc}");
  });
});
