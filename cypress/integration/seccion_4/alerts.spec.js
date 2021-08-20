/// <reference types="Cypress" />;
require("cypress-xpath");

describe("Alertas en Cypress", () => {
  it("Modal", () => {
    const tiempo = 2000;
    cy.visit("https://www.seleniumeasy.com/test/bootstrap-modal-demo.html");
    cy.title().should(
      "eq",
      "Selenium Easy Demo - Bootstrap Modal Demo to Automate"
    );
    cy.wait(tiempo);

    cy.xpath("//a[@href='#myModal0']").click();
    cy.wait(tiempo);
    cy.xpath("(//a[@href='#'][contains(.,'Close')])[1]").click({ force: true });

    cy.xpath("//a[@href='#myModal0']").click();
    cy.wait(tiempo);
    cy.xpath("(//a[@href='#'][contains(.,'Save changes')])[1]").click({
      force: true,
    });
  });
});
