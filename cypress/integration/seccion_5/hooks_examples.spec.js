/// <reference types='Cypress' />;

require("cypress-xpath");
require("cypress-plugin-tab");
require("@4tw/cypress-drag-drop");
require("cypress-file-upload");

describe("Hooks Ejmplos", () => {
  const tiempo = 1000;

  before(() => {
    cy.visit("https://www.seleniumeasy.com/test/basic-checkbox-demo.html");
    cy.title().should(
      "eq",
      "Selenium Easy - Checkbox demo for automation using selenium"
    );
    cy.wait(tiempo);
  });
  it("Test uno", () => {
    cy.get("[type='checkbox']").check().should("be.visible");
    cy.wait(tiempo);
  });

  it("Test dos", () => {
    cy.get("[type='checkbox']").uncheck().should("not.be.checked");
    cy.wait(tiempo);
  });

  it("Test tres", () => {
    cy.xpath(
      "//*[@id='easycont']/div/div[2]/div[2]/div[2]/div[3]/label/input"
    ).check();
    cy.wait(tiempo);
  });
});
