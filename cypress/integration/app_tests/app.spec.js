describe('App', () => {
  it('Displays Registration Page at home url', () => {
    cy.visit('/')
    cy.contains('Registration')
  })
})