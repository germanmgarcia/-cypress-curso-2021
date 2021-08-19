/// <reference types="Cypress" />;
require("cypress-file-upload");

describe("Upload Images", () => {
  it("Cargar images", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1000);

    const ruta = "img1.png";
    cy.get("[type='file']").attachFile(ruta);
    cy.wait(2000);
  });
});
