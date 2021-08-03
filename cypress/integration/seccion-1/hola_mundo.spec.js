describe("Bienvenido al curso de Cypress sección 1", () => {
    it('Mi primer test -> Hola mundo', () => {
        cy.log("Hola mundo")
        cy.wait(1500)
    });

    it('Segundo test -> Campo name', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.get("#userName").type("Germán")
        cy.wait(2000)
    });
})