it('Acessa a página do exemplo', () => {
  cy.visit('https://example.cypress.io')
  cy.contains('Kitchen Sink').should('be.visible')
});

it('tsete01', function() {
  cy.visit('cy.visit('https://buger-eats-qa.vercel.app/')')
  cy.visit('https://buger-eats-qa.vercel.app/')
  
});