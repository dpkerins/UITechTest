describe('Welcome Page', () => {
  it('Displays Welcome Page', () => {
    cy.visit('/welcome')
    cy.contains('Welcome')
  })
  it('displays a list of club members', () => {
    cy.visit('/welcome')
    cy.contains('Bob Jones')
    cy.contains('Tina Smith')
    cy.contains('Saanvi Gupta')
  })
})