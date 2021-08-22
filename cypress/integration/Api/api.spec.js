/// <reference types="Cypress" />;

describe("Api consultas", () => {
  let datos = null;
  it("Test Api", () => {
    datos = cy.request("https://rickandmortyapi.com/api/episode");
    datos.its("status").should("equal", 200);
  });

  it("Test Api", () => {
    datos = cy.request("https://rickandmortyapi.com/api/episode2");
    datos.its("status").should("equal", 200);
  });
});
