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

  it("Assert find, eq, validando que el vestido es nuevo y el precio", () => {
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

  it("Assert contain.text y have.text", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1000);

    cy.get("#userName").should("be.visible").type("Germán");
    cy.get("#userEmail").should("be.visible").type("german@gmail.com");
    cy.get("#submit").should("be.visible").click();

    cy.get("#name").should("have.text", "Name:Germán");
    cy.get("#name").should("contain.text", "Germán");
  });

  it("Assert have.value más then", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1000);

    cy.get("#userName").should("be.visible").type("Germán");
    cy.get("#userName")
      .should("have.value", "Germán")
      .then(() => {
        cy.get("#userEmail").should("be.visible").type("german@gmail.com");
        cy.get("#submit").should("be.visible").click();
      });
  });

  it("Assert have.class más then", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1000);

    cy.get("#userName")
      .should("be.visible")
      .should("have.class", "mr-sm-2")
      .then(() => {
        cy.get("#userName").type("Germán");
      });
  });

  it("Assert have.class y la función and", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1000);

    cy.get("#userName")
      .should("be.visible")
      .and("have.class", "mr-sm-2")
      .then(() => {
        cy.get("#userName").type("Germán");
      });
  });

  it("Assert not.have.class y la función and", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "ToolsQA");
    cy.wait(1000);

    cy.get("#userName")
      .should("be.visible")
      .and("not.have.class", "mr-sm-22")
      .then(() => {
        cy.get("#userName").type("Germán");
      });
  });

  it("Assert length el css", () => {
    cy.visit("https://www.seleniumeasy.com/test/table-pagination-demo.html");
    cy.title().should("eq", "Selenium Easy - Table with Pagination Demo");
    cy.wait(1000);

    cy.get("#myTable >tr >td")
      .should("have.length", 91)
      .and("have.css", "padding", "8px");
  });

  it.only("Contains", () => {
    const tiempo = 1000;
    cy.visit("https://www.seleniumeasy.com/test/basic-first-form-demo.html");
    cy.title().should(
      "eq",
      "Selenium Easy Demo - Simple Form to Automate using Selenium"
    );
    cy.wait(tiempo);

    //Eliminando ventana
    cy.get(".at-cm-no-button").should("be.visible").click({ force: true });
    cy.get(".form-group > #user-message")
      .should("be.visible")
      .type("Demo del contenido");
      cy.wait(tiempo);
    cy.contains("[type='button']", "Show Message").should("be.visible").click({ force: true });
  });
});
