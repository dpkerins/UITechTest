describe('Welcome Page', () => {
  it('Displays Welcome Page', () => {
    cy.visit('/welcome')
    cy.contains('Welcome')
  })
})