/// <reference types="Cypress" />;

describe("Carga por fixture", () => {
  //   before(() => {
  //     cy.fixture("datos").then((data) => {
  //       globalThis.data = data;
  //     });
  //   });

  before(() => {
    cy.fixture("datos").as("datos_json"); //Alias
  });
  it("Test Cargando desde JSON", () => {
    cy.get("@datos_json").then((data) => {
      data.forEach((element) => {
        cy.visit("https://demoqa.com/text-box");
        cy.title().should("eq", "ToolsQA");
        cy.wait(1500);
        cy.get("#userName").should("be.visible").type(element.nombre);
        cy.get("#userEmail").should("be.visible").type(element.email);
        cy.get("#currentAddress").should("be.visible").type(element.direccion1);
        cy.get("#permanentAddress").should("be.visible").type(element.direccion2);
        cy.get("#submit").should("be.visible").click();
      });
    });
  });
});
