Given("Abrir el navegador principal", () => {
  cy.visit("https://demoqa.com/text-box");
});

When("Cargando el nombre", () => {
  cy.get("#userName").should("be.visible").type("Germán");
  cy.wait(1500);
});

When("Cargando el email", () => {
  cy.get("#userEmail").should("be.visible").type("demo@gmail.com");
  cy.wait(1500);
});

And("Cargando la Dirección", () => {
  cy.get("#currentAddress").should("be.visible").type("Demo dirección");
  cy.wait(1500);
});

Then("Validar el nombre", () => {
  cy.title().should("eq", "ToolsQA");
  cy.wait(1500);
});
