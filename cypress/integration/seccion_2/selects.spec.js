/// <reference types="Cypress" />;

describe("Sección Selects", () => {
  it("Select uno", () => {
    cy.visit(
      "https://www.seleniumeasy.com/test/basic-select-dropdown-demo.html"
    );
    cy.title().should("eq", "Selenium Easy Demo - Automate All Scenarios");
    cy.wait(1000);

    cy.get("#select-demo")
      .should("be.visible")
      .select("Friday")
      .should("have.value", "Friday");
    cy.wait(1000);
    cy.get("#select-demo")
      .should("be.visible")
      .select("Saturday")
      .should("have.value", "Saturday");
  });

  it("Select autocompletado", () => {
    cy.visit("https://www.google.com");
    cy.title().should("eq", "Google");
    cy.wait(1000);

    cy.get("[name='q']").should("be.visible").type("Ferrai").type("{enter}");
    cy.wait(1500);
  });

  it("Select Multi-select", () => {
    cy.visit(
      "https://www.seleniumeasy.com/test/basic-select-dropdown-demo.html"
    );
    cy.title().should("eq", "Selenium Easy Demo - Automate All Scenarios");
    cy.wait(1000);

    cy.get("#multi-select")
      .should("be.visible")
      .select(["California", "Ohio", "Washington"])
      .then(() => {
        cy.get("#printMe").should("be.visible").click();
      });
  });
});
