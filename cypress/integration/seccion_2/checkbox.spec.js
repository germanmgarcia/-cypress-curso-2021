/// <reference types="Cypress" />;
require("cypress-xpath");

describe("Nueva Sección Checkbox", () => {
  it("Check varios", () => {
    cy.visit("https://www.seleniumeasy.com/test/basic-checkbox-demo.html");
    cy.title().should(
      "eq",
      "Selenium Easy - Checkbox demo for automation using selenium"
    );
    cy.wait(1000);

    cy.get("[type='checkbox']").check().should("be.checked");
    cy.wait(2000);
    cy.get("[type='checkbox']").uncheck().should("not.be.checked");
  });

  it("Check uno", () => {
    cy.visit("https://www.seleniumeasy.com/test/basic-checkbox-demo.html");
    cy.title().should(
      "eq",
      "Selenium Easy - Checkbox demo for automation using selenium"
    );
    cy.wait(1000);

    cy.get("#isAgeSelected").check().should("be.checked");
    cy.xpath("(//input[contains(@type,'checkbox')])[5]")
      .check()
      .should("be.checked");
  });

  it.only("Check uno click", () => {
    cy.visit("https://www.seleniumeasy.com/test/basic-checkbox-demo.html");
    cy.title().should(
      "eq",
      "Selenium Easy - Checkbox demo for automation using selenium"
    );
    cy.wait(1000);

    cy.get("#isAgeSelected").click();
    cy.xpath("(//input[contains(@type,'checkbox')])[5]").click();
  });
});
