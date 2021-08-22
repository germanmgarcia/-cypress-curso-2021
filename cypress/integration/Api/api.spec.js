/// <reference types="Cypress" />;

describe("Api consultas", () => {
  let datos = null;
  it("Test Api", () => {
    datos = cy.request("https://rickandmortyapi.com/api/episode");
    datos.its("status").should("equal", 200);
  });

  it("Test Api Error", () => {
    datos = cy.request("https://rickandmortyapi.com/api/episode2");
    datos.its("status").should("equal", 200);
  });

  it.only("Test Api comparado consulta", () => {
    cy.request({
      method: "GET",
      url: "https://rickandmortyapi.com/api/episode",
      headers: {
        accept: "application/json",
      },
    }).then((response) => {
      let datos;
      datos = JSON.parse(JSON.stringify(response.body));
      cy.log(datos);

      expect(datos.results[0]).has.property("name", "Pilot");
    });
  });
});
