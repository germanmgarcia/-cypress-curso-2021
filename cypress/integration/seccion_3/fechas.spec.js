/// <reference types="Cypress" />;

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
});
