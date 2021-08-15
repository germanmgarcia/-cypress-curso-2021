/// <reference types="Cypress" />;
require("cypress-plugin-tab");

describe("Primer Reto", () => {
  it("", () => {
    cy.visit("https://demoqa.com/webtables");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1000);

    //buscar
    cy.get("#searchBox").should("be.visible").type("Cierra");
    cy.wait(1000);
    cy.get("#searchBox").should("be.visible").clear();

    //agregando campo
    cy.get("#addNewRecordButton").should("be.visible").click();
    cy.wait(1000);
    cy.get("#firstName")
      .should("be.visible")
      .type("Germán")
      .tab()
      .type("García")
      .tab()
      .type("gmgarcia@gmail.com")
      .tab()
      .type("30")
      .tab()
      .type("30000")
      .tab()
      .type("Sistemas");
    cy.get("#submit").should("be.visible").click();

    //buscar
    cy.get("#searchBox").should("be.visible").type("Germán");
    cy.wait(1000);
    cy.get("#searchBox").should("be.visible").clear();

    //editar campo
    cy.get("#edit-record-2").should("be.visible").click();
    cy.wait(1000);
    cy.get("#age").should("be.visible").clear().type("50");
    cy.wait(1500);
    cy.get("#salary").should("be.visible").clear().type("50000");
    cy.get("#submit").should("be.visible").click();

    //borrar campo
    cy.wait(1500);
    cy.get("#delete-record-2").should("be.visible").click();
  });
});
