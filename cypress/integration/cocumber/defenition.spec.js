Given("Abrir el navegador principal", () => {
  cy.visit("https://demoqa.com/text-box");
});

When("Cargando el nombre {word}", (nombre) => {
  cy.get("#userName").should("be.visible").type(nombre);
  cy.wait(1500);
});

When("Cargando el email {word}", (correo) => {
  cy.get("#userEmail").should("be.visible").type(correo);
  cy.wait(1500);
});

And("Cargando la Dirección demo {word}", (direccion) => {
  cy.get("#currentAddress").should("be.visible").type(direccion);
  cy.wait(1500);
});

And("Cargando la Dirección Dos demo {word}", (direccion) => {
  cy.get("#permanentAddress").should("be.visible").type(direccion);
  cy.wait(1500);
});

And("Click en el botón", () => {
  cy.get("#submit").should("be.visible").click();
  cy.wait(1500);
});

Then("Validar el nombre de la página", () => {
  cy.title().should("eq", "ToolsQA");
  cy.wait(1500);
});
