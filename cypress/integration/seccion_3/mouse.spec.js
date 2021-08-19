/// <reference types="Cypress" />;
require("cypress-file-upload");
require('@4tw/cypress-drag-drop')

describe("Cypress eventos Mouse", () => {
  it("Drag and Drop", () => {
    const tiempo = 1000;
    cy.visit("https://the-internet.herokuapp.com/drag_and_drop");
    cy.title().should("eq", "The Internet");
    cy.wait(tiempo);

    cy.get("#column-a").drag("#column-b", { force: true})
  });
});
