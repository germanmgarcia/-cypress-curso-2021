/// <reference types="Cypress" />;

describe("Tipos de Selectores", () => {
  it("Selector por Id", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1000);

    //selector por Id
    cy.get("#userName").should("be.visible").type("Germán");
    cy.get("#userEmail").should("be.visible").type("demo@gmail.com");
  });

  it.only("Selector por Atributo", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1000);

    //selector por id
    cy.get("[placeholder='Full Name']").should("be.visible").type("Juan Peréz");
    // cy.get("#userEmail").should("be.visible").type("demo@gmail.com");
  });
});
