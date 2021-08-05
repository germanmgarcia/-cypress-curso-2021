/// <reference types="Cypress" />;
require("cypress-xpath");

describe("Tipos de Selectores", () => {
  it("Selector por Id", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1000);

    //selector por Id
    cy.get("#userName").should("be.visible").type("Germán");
    cy.get("#userEmail").should("be.visible").type("demo@gmail.com");
  });

  it("Selector por Atributo", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1000);

    //selector por Atributo
    cy.get("[placeholder='Full Name']").should("be.visible").type("Juan Peréz");
  });

  it("Selector por Xpath", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1000);

    //selector por Xpath
    cy.xpath("//*[@id='userName']").should("be.visible").type("Juan Peréz");
    cy.wait(1000);
    cy.xpath("//input[contains(@placeholder,'name@example.com')]")
      .should("be.visible")
      .type("desarrollo@gmail.com");
    cy.xpath("//textarea[@id='currentAddress']")
      .should("be.visible")
      .type("Demo de la dirección");
  });

  it("Selector por Contains", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1000);

    //selector por Contains
    cy.get(".custom-control-label").contains("Female").click();
    cy.wait(1000);
    cy.get(".custom-control-label").contains("Other").click();
  });

  it.only("Selector por copy_selector", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1000);

    //selector por Contains
    cy.get("#userNumber").should("be.visible").type("45879621");
  });
});
