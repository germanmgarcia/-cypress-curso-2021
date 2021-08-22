class Project_One {
  visitHome() {
    const tiempo = 1000;
    before(() => {
      cy.visit("https://www.seleniumeasy.com/test/input-form-demo.html");
      cy.title().should(
        "eq",
        "Selenium Easy - Input Form Demo with Validations"
      );
      cy.wait(tiempo);
    });
  }

  SeccionUno(name, lasName, email, tiempo) {
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
  }

  SeccionDos(phone, address, city, state, tiempo) {
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
  }

  SeccionTres(cp, web, project, tiempo) {
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
}

export default Project_One;
