/// <reference types="Cypress" />;
require("cypress-xpath");

describe("Manejo de Invoke", () => {
  it("Invoke text", () => {
    const tiempo = 2000;
    cy.visit(
      "https://testpages.herokuapp.com/styled/validation/input-validation.html"
    );
    cy.title().should("eq", "Input Validation");
    cy.wait(tiempo);

    cy.get(".page-body > :nth-child(5)").invoke("text").as("info");
    cy.get("@info").should(
      "contain",
      "The information will be submitted to the server if it passes client side validation."
    );

    cy.xpath("//label[@for='firstname'][contains(.,'First name:')]")
      .invoke("text")
      .as("title_name");
    cy.wait(tiempo);
    cy.get("@title_name")
      .should("contain", "First name:")
      .then(() => {
        cy.get("#firstname").type("Germán");
      });
  });

  it("Invoke estilos", () => {
    const tiempo = 2000;
    cy.visit(
      "https://testpages.herokuapp.com/styled/validation/input-validation.html"
    );
    cy.title().should("eq", "Input Validation");
    cy.wait(tiempo);

    cy.get("[for='firstname']").invoke(
      "attr",
      "style",
      "color: Blue; font-size: 50px"
    );
  });

  it("Invoke ocultar y mostrar", () => {
    const tiempo = 1000;
    cy.visit(
      "https://testpages.herokuapp.com/styled/validation/input-validation.html"
    );
    cy.title().should("eq", "Input Validation");
    cy.wait(tiempo);

    cy.get("[for='firstname']").invoke("hide");
    cy.get("#firstname").invoke("hide");
    cy.wait(tiempo);

    cy.get("[for='firstname']").invoke("show", "3s");
    cy.get("#firstname").invoke("show", "4s");
    cy.wait(tiempo);
  });

  it("Invoke ocultar y mostrar reto", () => {
    const tiempo = 1000;
    cy.visit(
      "https://testpages.herokuapp.com/styled/validation/input-validation.html"
    );
    cy.title().should("eq", "Input Validation");
    //ocultar campos
    cy.get("[for='surname']").invoke("hide");
    cy.get("#surname").invoke("hide");
    cy.wait(tiempo);

    cy.get("#firstname")
      .should("be.visible")
      .type("Carlos")
      .then(() => {
        //mostrar campos
        cy.wait(tiempo);
        cy.get("[for='surname']").invoke("show", "8s");
        cy.get("#surname").invoke("show", "8s");
        cy.get("#surname").type("Olmos Salgado");
      });
  });

  it("Invoke src", () => {
    const tiempo = 1000;
    cy.visit("https://www.seleniumeasy.com/test/bootstrap-modal-demo.html");
    cy.title().should(
      "eq",
      "Selenium Easy Demo - Bootstrap Modal Demo to Automate"
    );

    cy.wait(tiempo);

    cy.xpath(
      "//img[@src='http://www.seleniumeasy.com/test/img/sponsored-by-CBT.png']"
    )
      .invoke("attr", "src")
      .should("include", "sponsored-by-CBT.png");
  });

  it("Invoke src", () => {
    const tiempo = 1000;
    cy.visit("https://dvwa.co.uk/");
    cy.title().should("eq", "DVWA - Damn Vulnerable Web Application");

    cy.wait(tiempo);

    cy.xpath("//*[@id='pagewidth']/div/div[5]/a[2]")
      .invoke("removeAttr", "target")
      .click({ force: true });
  });
});
