it('Acessa a página do exemplo', () => {
  cy.visit('https://example.cypress.io')
  cy.contains('Kitchen Sink').should('be.visible')
})