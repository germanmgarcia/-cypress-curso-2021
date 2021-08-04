/// <reference types="Cypress" />;
require("cypress-plugin-tab");

describe("Opciones de Click", () => {
  it("Click Sensillo", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.title().should("eq", "OrangeHRM");
    cy.wait(1000);

    cy.get("#txtUsername")
      .should("be.visible")
      .click()
      .type("Admin")
      .tab()
      .should("be.visible")
      .type("admin123");
    cy.get("#btnLogin").should("be.visible").click();
    cy.get("#menu_admin_viewAdminModule > b").should("be.visible").click();
  });

  it("Click Force true", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.title().should("eq", "OrangeHRM");
    cy.wait(1000);

    cy.get("#txtUsername")
      .should("be.visible")
      .click()
      .type("Admin")
      .tab()
      .should("be.visible")
      .type("admin123");
    cy.get("#btnLogin").should("be.visible").click();
    cy.get("#menu_admin_viewAdminModule > b")
      .should("be.visible")
      .click({ force: true });
  });
});
