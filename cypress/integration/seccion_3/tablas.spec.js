/// <reference types="Cypress" />;

describe("Elementos de una tabla", () => {
  it("Children", () => {
    const tiempo = 1500;
    cy.visit(
      "https://www.seleniumeasy.com/test/table-records-filter-demo.html"
    );
    cy.title().should("eq", "Selenium Easy - Table Data Filter Demo");
    cy.wait(tiempo);

    cy.get(".btn-group")
      .children(".btn-success")
      .should("contain", "Green")
      .click({ force: true });
    cy.wait(tiempo);
    cy.get(".btn-group")
      .children(".btn-danger")
      .should("contain", "Red")
      .click({ force: true });
    cy.wait(tiempo);
  });

  it("Seleccionar por medio de EQ", () => {
    const tiempo = 1500;
    cy.visit(
      "https://www.seleniumeasy.com/test/table-records-filter-demo.html"
    );
    cy.title().should("eq", "Selenium Easy - Table Data Filter Demo");
    cy.wait(tiempo);

    cy.get("[type='button']")
      .eq(2)
      .should("contain", "Orange")
      .click({ force: true });
    cy.wait(tiempo);
    cy.get("[type='button']")
      .eq(4)
      .should("contain", "All")
      .click({ force: true });
  });

  it("Seleccionar por medio de Filter", () => {
    const tiempo = 1500;
    cy.visit(
      "https://www.seleniumeasy.com/test/table-records-filter-demo.html"
    );
    cy.title().should("eq", "Selenium Easy - Table Data Filter Demo");
    cy.wait(tiempo);

    cy.get("[type='button']").filter(".btn-warning");
    cy.get("[type='button']").filter(".btn-success");
    cy.wait(tiempo);
    cy.get("[type='button']").filter(".btn-warning").click();
    cy.wait(tiempo);
    cy.get("[type='button']")
      .filter(".btn-success")
      .should("contain", "Green")
      .click();
  });

  it("Seleccionar por medio de Find", () => {
    const tiempo = 1500;
    cy.visit(
      "https://www.seleniumeasy.com/test/table-records-filter-demo.html"
    );
    cy.title().should("eq", "Selenium Easy - Table Data Filter Demo");
    cy.wait(tiempo);

    cy.get(".btn-group").find(".btn-danger").should("contain", "Red").click();
    cy.wait(tiempo);
  });

  it("Seleccionar por medio de First", () => {
    const tiempo = 1500;
    cy.visit(
      "https://www.seleniumeasy.com/test/table-records-filter-demo.html"
    );
    cy.title().should("eq", "Selenium Easy - Table Data Filter Demo");
    cy.wait(tiempo);

    cy.get(".btn-group")
      .find("button")
      .first()
      .should("contain", "Green")
      .click({ force: true });
    cy.wait(tiempo);
    // Función para el último
    cy.get(".btn-group").find("button").last().click({ force: true });
  });

  it("Seleccionar los elementos siguiente NextAll", () => {
    const tiempo = 1500;
    cy.visit(
      "https://www.seleniumeasy.com/test/table-records-filter-demo.html"
    );
    cy.title().should("eq", "Selenium Easy - Table Data Filter Demo");
    cy.wait(tiempo);

    cy.get("[type='button']").should("contain", "Green");
    cy.wait(tiempo);
    cy.get("[type='button']")
      .should("contain", "Green")
      .nextAll()
      .should("have.length", 4);
  });

  it("Seleccionar al elemento padre", () => {
    const tiempo = 1500;
    cy.visit(
      "https://www.seleniumeasy.com/test/table-records-filter-demo.html"
    );
    cy.title().should("eq", "Selenium Easy - Table Data Filter Demo");
    cy.wait(tiempo);

    cy.get("[type='button']").parent().should("have.class", "btn-group");
  });

  it("Reto de la tablas", () => {
    const tiempo = 1500;
    cy.visit(
      "https://www.seleniumeasy.com/test/table-records-filter-demo.html"
    );
    cy.title().should("eq", "Selenium Easy - Table Data Filter Demo");
    cy.wait(tiempo);

    cy.get("[type='button']")
      .eq(1)
      .should("contain", "Green")
      .click({ force: true });
    cy.wait(tiempo);
    cy.get("[type='checkbox']").check({ force: true });

    cy.get("[type='button']")
      .eq(4)
      .should("contain", "All")
      .click({ force: true });
    cy.wait(tiempo);
    cy.get("[type='checkbox']").check({ force: true });
  });

  it("Reto de la tablas con for", () => {
    const tiempo = 1500;
    cy.visit(
      "https://www.seleniumeasy.com/test/table-records-filter-demo.html"
    );
    cy.title().should("eq", "Selenium Easy - Table Data Filter Demo");
    cy.wait(tiempo);

    for (let x = 0; x <= 4; x++) {
      cy.get("[type='button']").eq(x).click({ force: true });
      cy.wait(tiempo);
      cy.get("[type='checkbox']").check({ force: true });
      cy.wait(tiempo);
    }
  });

  it("Reto de la tablas con for y Asserts", () => {
    const tiempo = 1500;
    cy.visit(
      "https://www.seleniumeasy.com/test/table-records-filter-demo.html"
    );
    cy.title().should("eq", "Selenium Easy - Table Data Filter Demo");
    cy.wait(tiempo);

    for (let x = 0; x <= 4; x++) {
      let nombreBottom = "";
      if (x == 1) {
        nombreBottom = "Green";
      } else if (x == 2) {
        nombreBottom = "Orange";
      } else if (x == 3) {
        nombreBottom = "Red";
      } else if (x == 4) {
        nombreBottom = "All";
      }
      cy.get("[type='button']")
        .eq(x)
        .should("contain", nombreBottom)
        .click({ force: true });
      cy.wait(tiempo);
      cy.get("[type='checkbox']").check({ force: true });
      cy.wait(tiempo);
    }
  });

  it("Mostrando los campos", () => {
    const tiempo = 1500;
    cy.visit("https://www.seleniumeasy.com/test/table-sort-search-demo.html");
    cy.title().should("eq", "Selenium Easy - Tabel Sort and Search Demo");
    cy.wait(tiempo);

    const datos = [];
    cy.get(".odd td")
      .each(($el, $index, $list) => {
        datos[$index] = $el.text();
      })
      .then(() => {
        for (let i = 0; i <= datos.length; i++) {
          cy.log(datos[i]);
        }
      });
  });

  it.only("Sumando los valores de los campos con la clase .odd", () => {
    const tiempo = 1500;
    cy.visit("https://www.seleniumeasy.com/test/table-sort-search-demo.html");
    cy.title().should("eq", "Selenium Easy - Tabel Sort and Search Demo");
    cy.wait(tiempo);

    const datos = [];
    let cantidadOdd = 0;
    cy.get("[role='row'] td")
      .each(($el, $index, $list) => {
        datos[$index] = $el.text();
      })
      .then(() => {
        for (let i = 0; i <= datos.length; i++) {
        //   cy.log(datos[i]);
          if (Number(datos[i])) {
            cantidadOdd += Number(datos[i]);
          }
        }
        cy.log("La cantidad total es: " + cantidadOdd);
        expect(cantidadOdd).eq(394);
        expect(cantidadOdd).to.eq(394);
      });
  });
});
