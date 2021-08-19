/// <reference types="Cypress" />;
require("cypress-file-upload");
require("@4tw/cypress-drag-drop");

describe("Cypress eventos Mouse", () => {
  it("Drag and Drop", () => {
    const tiempo = 1000;
    cy.visit("https://the-internet.herokuapp.com/drag_and_drop");
    cy.title().should("eq", "The Internet");
    cy.wait(tiempo);

    cy.get("#column-a").drag("#column-b", { force: true });
  });

  it("Drag and Drop 2", () => {
    const tiempo = 1000;
    cy.visit("https://www.seleniumeasy.com/test/drag-and-drop-demo.html");
    cy.title().should("eq", "Selenium Easy Demo - Drag and Drop Demo");
    cy.wait(tiempo);

    cy.get("#todrag > :nth-child(2)").drag("#mydropzone", { force: true });
    cy.get("#todrag > :nth-child(3)").drag("#mydropzone", { force: true });
    cy.get("#todrag > :nth-child(4)").drag("#mydropzone", { force: true });
    cy.get("#todrag > :nth-child(5)").drag("#mydropzone", { force: true });
  });

  it.only("Remove target", () => {
    const tiempo = 1000;
    cy.visit("https://way2automation.com/");
    cy.title().should(
      "eq",
      "Online Selenium Certification Course | Selenium Online Training | Selenium Tutorial"
    );
    cy.wait(tiempo);

    cy.contains("Selenium").trigger("mouseover");
    cy.contains("Selenium Python Video Tutorials")
      .invoke("removeAttr", "target")
      .click();
  });
});
