/// <reference types='Cypress' />;

require("cypress-xpath");
require("cypress-plugin-tab");
require("@4tw/cypress-drag-drop");
require("cypress-file-upload");

describe("Reto cypress por medio de comandos personalizados", () => {
  const tiempo = 1000;
  before(() => {
    cy.visit("https://www.seleniumeasy.com/test/input-form-demo.html");
    cy.title().should("eq", "Selenium Easy - Input Form Demo with Validations");
    cy.wait(tiempo);
  });

  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  it("test", () => {
    cy.bloque_reto_custom2(
      "Germán",
      "García",
      "gmgarcia@gmail.com",
      "5548748652",
      "bogota c#",
      "bogota",
      "Alabama",
      "07895",
      "demo.com",
      "Proyecto demo uni",
      tiempo
    );
  });
});
