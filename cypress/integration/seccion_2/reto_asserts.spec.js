/// <reference types="Cypress" />;

describe("Reto asserts", () => {
  it("Reto Asserts", () => {
    const tiempo = 1300;
    cy.visit("https://www.seleniumeasy.com/test/basic-first-form-demo.html");
    cy.title().should(
      "eq",
      "Selenium Easy Demo - Simple Form to Automate using Selenium"
    );
    cy.wait(tiempo);

    //Eliminando ventana
    cy.get(".at-cm-no-button").should("be.visible").click({ force: true });

    let a = 40;
    let b = 35;
    let total = a + b;

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
        if (res > 50) {
          a -= 10;
          b -= 10;
          cy.get("#sum1")
            .invoke("attr", "placeholder")
            .should("contain", "Enter value")
            .then(() => {
              cy.get("#sum1").clear().type(a);
              cy.wait(tiempo);
              cy.get("#sum1").invoke("attr", "style", "color:red");
            });
          cy.get("#sum2")
            .should("be.visible")
            .and("have.class", "form-control")
            .clear()
            .type(b);
          cy.wait(tiempo);
          cy.get("#sum2").invoke("attr", "style", "color:blue");
          cy.contains("[type='button']", "Get Total").click();
          cy.get("#displayvalue")
            .should("be.visible")
            .then(() => {
              cy.get("#displayvalue").invoke("attr", "style", "color:yellow");
            });
        } else {
          a += 5;
          b += 5;
          cy.get("#sum1")
            .should("be.visible")
            .and("have.class", "form-control")
            .clear()
            .type(a);
          cy.wait(tiempo);

          cy.get("#sum2")
            .should("be.visible")
            .and("have.class", "form-control")
            .clear()
            .type(b);
          cy.wait(tiempo);
          cy.contains("[type='button']", "Get Total").click();
        }
      });
  });
});
