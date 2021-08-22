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
}

export default Project_One;
