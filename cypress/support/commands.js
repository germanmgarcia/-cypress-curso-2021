// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("texto_visible", (selector, texto, tiempo) => {
  cy.get(selector).should("be.visible").type(texto);
  cy.wait(tiempo);
});

Cypress.Commands.add("texto_visible_xpath", (selector, texto, tiempo) => {
  cy.xpath(selector).should("be.visible").type(texto);
  cy.wait(tiempo);
});

Cypress.Commands.add("click2", (selector, tiempo) => {
  cy.get(selector).should("be.visible").click();
  cy.wait(tiempo);
});

Cypress.Commands.add("click_force", (selector, tiempo) => {
  cy.get(selector).should("be.visible").click({ force: true });
  cy.wait(tiempo);
});

Cypress.Commands.add("click_force_xpath", (selector, tiempo) => {
  cy.xpath(selector).should("be.visible").click({ force: true });
  cy.wait(tiempo);
});

Cypress.Commands.add(
  "bloque_reto_custom",
  (
    name,
    lasName,
    email,
    phone,
    address,
    city,
    state,
    cp,
    web,
    project,
    tiempo
  ) => {
    cy.xpath("//input[contains(@name,'first_name')]")
      .clear()
      .should("be.visible")
      .type(name);
    cy.wait(tiempo);
    cy.xpath("//input[contains(@name,'last_name')]")
      .clear()
      .should("be.visible")
      .type(lasName);
    cy.wait(tiempo);
    cy.xpath("//input[contains(@name,'email')]")
      .clear()
      .should("be.visible")
      .type(email);
    cy.wait(tiempo);
    cy.xpath("//input[contains(@name,'phone')]")
      .clear()
      .should("be.visible")
      .type(phone);
    cy.wait(tiempo);
    cy.xpath("//input[contains(@name,'address')]")
      .clear()
      .should("be.visible")
      .type(address);
    cy.wait(tiempo);
    cy.xpath("//input[contains(@name,'city')]")
      .clear()
      .should("be.visible")
      .type(city);
    cy.wait(tiempo);
    cy.xpath("//select[contains(@name,'state')]").select(state, {
      force: true,
    });
    cy.wait(tiempo);
    cy.xpath("//input[contains(@name,'zip')]").should("be.visible").type(cp);
    cy.wait(tiempo);
    cy.xpath("//input[contains(@name,'website')]")
      .should("be.visible")
      .type(web);
    cy.wait(tiempo);
    cy.xpath("//input[contains(@value,'yes')]").check().should("be.checked");
    cy.wait(tiempo);
    cy.xpath("//textarea[contains(@class,'form-control')]")
      .should("be.visible")
      .type(project);
    cy.wait(tiempo);
    cy.xpath("//button[@type='submit'][contains(.,'Send')]").click({
      forse: true,
    });
  }
);

Cypress.Commands.add("validar_campo", (selector, mensaje, nombre_campo, tiempo) => {
  cy.xpath(selector)
    .should("be.visible")
    .should("contain", mensaje)
    .then(() => {
      cy.log("#########");
      cy.log("El " + nombre_campo + " no es valido");
      cy.log("#########");
    });
  cy.wait(tiempo);
});
