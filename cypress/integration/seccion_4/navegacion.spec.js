/// <reference types='Cypress' />;

require("cypress-xpath");
require("cypress-plugin-tab");
require("@4tw/cypress-drag-drop");
require("cypress-file-upload");

describe("Navegación entre páginas", () => {
  it("Back, forward", () => {
    const tiempo = 1000;
    cy.visit("https://demoqa.com/");
    cy.title().should("eq", "ToolsQA");
    cy.wait(tiempo);

    cy.get(":nth-child(1) > :nth-child(1) > .avatar")
      .should("be.visible")
      .click({ force: true });
    cy.wait(tiempo);

    cy.get(":nth-child(1) > .element-list > .menu-list > #item-0")
      .should("be.visible")
      .click({ force: true });
    cy.wait(tiempo);

    cy.go("back");
    cy.go("back");

    cy.go("forward");
    cy.go("forward");
  });

  it.only("Reload", () => {
    const tiempo = 1000;
    cy.visit("https://demoqa.com/");
    cy.title().should("eq", "ToolsQA");
    cy.wait(tiempo);

    cy.get(":nth-child(1) > :nth-child(1) > .avatar")
      .should("be.visible")
      .click({ force: true });
    cy.wait(tiempo);

    cy.get(":nth-child(1) > .element-list > .menu-list > #item-0")
      .should("be.visible")
      .click({ force: true });
    cy.wait(tiempo);

    cy.get("#userName").should("be.visible").type("Germán");
    cy.get("#userEmail").should("be.visible").type("gmgarcia@gmail.com");

    cy.reload();
    cy.wait(tiempo);
    cy.go("back");
  });
});
