describe('My first test', () => {
    it('Verify google title', () => {
        cy.visit('https://www.digio.in/#/index')
        cy.title().should('eq','Aadhaar eSign eKYC NACH | Digio')
    })
})