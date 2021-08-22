/// <reference types='Cypress' />;
import Project_One from "../../support/page_object/project_one/project_one";

require("cypress-xpath");
require("cypress-plugin-tab");
require("@4tw/cypress-drag-drop");
require("cypress-file-upload");

describe("Page Objects Models", () => {
  const project_one = new Project_One();
  project_one.visitHome();
  it("Test Sección Uno", () => {
    project_one.SeccionUno("Germán", "García", "demo@gmail.com", 1000);
  });

  it("Test Sección Dos", () => {
    project_one.SeccionDos("55685", "Dirección Uno", "EE.UU", "Colorado", 1000);
    cy.validar_campo(
      "//small[@class='help-block'][contains(.,'Please supply a vaild phone number with area code')]",
      "Please supply a vaild phone number with area code",
      "Télefono",
      1000
    );
  });

  it("Test Sección Tres", () => {
    project_one.SeccionTres("07980", "demo.com", "Proyecto uno", 1000);
  });
});
