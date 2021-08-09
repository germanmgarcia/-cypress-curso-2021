describe("", () => {
  it("", () => {
    cy.visit(
      "https://www.seleniumeasy.com/test/basic-select-dropdown-demo.html"
    );
    cy.title().should("eq", "Selenium Easy Demo - Automate All Scenarios");
    cy.wait(1000);

    cy.get("#select-demo").should("be.visible").select("Friday");
    cy.wait(1000);
    cy.get("#select-demo").should("be.visible").select("Saturday");
  });
});
