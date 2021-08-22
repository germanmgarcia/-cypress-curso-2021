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

  it("Test Api comparado consulta GET", () => {
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

  it("Test Api POST", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/posts",
      body: {
        id: 4,
        title: "Insertando un valor",
        author: "Germán",
      },
    }).then((response) => {
      expect(response.status).to.eql(201);
    });
  });
});
