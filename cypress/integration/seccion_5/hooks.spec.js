/// <reference types="Cypress" />;

describe("Hooks", () => {
  before(() => {
    // runs once before all tests in the block
    cy.log("Esto inicia antes de todo solo una vez");
  });

  beforeEach(() => {
    // runs before each test in the block
    cy.log("Esto se repite en cada uno de los test !Importante");
  });

  afterEach(() => {
    // runs after each test in the block
    cy.log("Esto se hace al final de todos los test");
  });

  after(() => {
    // runs once after all tests in the block
    cy.log("Este es el último ciclo de todo");
  });

  it("Test uno", () => {
    cy.log("Test uno");
  });

  it("Test dos", () => {
    cy.log("Test dos");
  });
});
