/// <reference types='Cypress' />;
import Project_One from "../../support/page_object/project_one/project_one";

require("cypress-xpath");
require("cypress-plugin-tab");
require("@4tw/cypress-drag-drop");
require("cypress-file-upload");

describe("descripcion", () => {
  const project_one = new Project_One();
  project_one.visitHome();
  it("test", () => {
    cy.log("hola");
  });
});
