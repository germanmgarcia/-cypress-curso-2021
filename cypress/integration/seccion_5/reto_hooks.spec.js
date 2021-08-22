/// <reference types='Cypress' />;

require("cypress-xpath");
require("cypress-plugin-tab");
require("@4tw/cypress-drag-drop");
require("cypress-file-upload");

describe("Reto hooks", () => {
  const tiempo = 1500;
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.title().should("eq", "OrangeHRM");
    cy.wait(tiempo);
    cy.get("#txtUsername").should("be.visible").clear().type("Admin");
    cy.wait(tiempo);
    cy.get("#txtPassword").should("be.visible").clear().type("admin123");
    cy.get("#btnLogin").click({ force: true });
  });

  afterEach(() => {
    cy.wait(tiempo);
    cy.xpath("//*[@id='welcome']").should("be.visible").click();
    cy.wait(tiempo);
    cy.xpath("//*[@id='welcome-menu']/ul/li[3]/a").should("be.visible").click();
    cy.wait(tiempo);
  });
  it("test uno", () => {
    cy.xpath("//b[contains(.,'Admin')]")
      .should("be.visible")
      .click({ force: true });
    cy.wait(tiempo);
  });

  it("test dos", () => {
    cy.xpath("//b[contains(.,'My Info')]")
      .should("be.visible")
      .click({ force: true });
    cy.wait(tiempo);
  });

  it("test tres", () => {
    cy.xpath("//b[contains(.,'Performance')]")
      .should("be.visible")
      .click({ force: true });
    cy.wait(tiempo);
  });
});
