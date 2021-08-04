/// <reference types="Cypress" />;
require("cypress-plugin-tab");

describe("Ejemplo función Tab", () => {
  it("Type con Tab", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1000);

    cy.get("#userName")
      .type("Germán")
      .tab()
      .type("ggmgarcia@gmail.com")
      .tab()
      .type("Campo");
  });
});
