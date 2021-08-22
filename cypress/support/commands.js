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

Cypress.Commands.add("Click", (selector, tiempo) => {
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
