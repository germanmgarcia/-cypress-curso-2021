/// <reference types="Cypress" />;

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

    const a = 10;
    const b = 20 + a;
    const total = a + b;

    cy.get("#sum1")
      .should("be.visible")
      .and("have.class", "form-control")
      .type(a);
    cy.get("#sum2")
      .should("be.visible")
      .and("have.class", "form-control")
      .type(b);
    cy.contains("[type='button']", "Get Total").click();

    cy.get("#displayvalue")
      .should("be.visible")
      .then((e) => {
        cy.log(e.text());
        const res = e.text();
        if (total == res) {
          cy.log("Son iguales");
        } else {
          cy.log("El resultado es incorrecto");
        }
      });
  });
});
