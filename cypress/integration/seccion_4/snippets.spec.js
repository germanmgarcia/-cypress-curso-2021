/// <reference types='Cypress' />;

require("cypress-xpath");
require("cypress-plugin-tab");
require("@4tw/cypress-drag-drop");
require("cypress-file-upload");

describe("Demo de mi primera plantilla", () => {
  it("Demo", () => {
    const tiempo = 2000;
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");
    cy.wait(tiempo);

    cy.get("#userName").should("be.visible").type("Demo");
    cy.wait(tiempo);
  });
});
