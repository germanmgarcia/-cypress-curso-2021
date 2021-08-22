/// <reference types='Cypress' />;

require("cypress-xpath");
require("cypress-plugin-tab");
require("@4tw/cypress-drag-drop");
require("cypress-file-upload");

describe("Comando Personalizados", () => {
  const tiempo = 1000;
  before(() => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");
    cy.wait(tiempo);
  });
  it("Demo Custom", () => {
    cy.texto_visible("#userName", "Germán", tiempo);
    cy.texto_visible("#userEmail", "gmgarcia@gmail.com", tiempo);
    cy.texto_visible_xpath(
      "//textarea[contains(@placeholder,'Current Address')]",
      "Dirección uno",
      tiempo
    );
    cy.texto_visible_xpath(
      "//textarea[@id='permanentAddress']",
      "Dirección dos",
      tiempo
    );
    cy.click_force_xpath("//button[@id='submit']", tiempo);
  });
});
