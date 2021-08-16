/// <reference types="Cypress" />;
require("cypress-xpath");

describe("Asserts", () => {
  it("Assert contains", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.title().should("eq", "My Store");
    cy.wait(1000);

    cy.get("#block_top_menu").contains("Women").click();
  });

  it("Assert find, eq", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.title().should("eq", "My Store");
    cy.wait(1000);

    cy.get(".product-container").find(".product-image-container").eq(0).click();
  });

  it.only("Assert find, eq, validando que el vestido es nuevo y el precio", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.title().should("eq", "My Store");
    cy.wait(1000);

    cy.get(".product-container").find(".product-image-container").eq(3).click();

    cy.get("#product_condition .editable").then((e) => {
      let estado = e.text();
      if (estado === "New") {
        cy.log("El vestido es Nuevo");
      }
    });

    cy.get("#our_price_display").then((e) => {
      let precio = e.text();
      precio = precio.slice(1, 3);
      if (precio > 30) {
        cy.log("El vestido sale de nuestro presupuesto, no lo podemos comprar");
        cy.xpath("//*[@id='columns']/div[1]/a[2]").click();
        cy.wait(1500);
      } else {
        cy.log(
          "El vestido esta de nuestro presupuesto, continua con la compra"
        );
        cy.get("#add_to_cart").click();
        cy.wait(1500);
      }
    });
  });
});
