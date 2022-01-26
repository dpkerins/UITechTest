describe('NavBar', () => {
  it('navbar is visible on registration page', () => {
    cy.visit('/')
    cy.contains('Tennis Club').should('be.visible');
  })
  it('navbar is visible on welcome page', () => {
    cy.visit('/welcome')
    cy.contains('Tennis Club').should('be.visible');
  })
  it('welcome link should redirect to welcome page', () => {
    cy.visit('/')
    cy.get('.navbar').contains('Welcome').click()
    cy.contains('Tina Smith')
  })
  it('registration link should redirect to registration page', () => {
    cy.visit('/welcome')
    cy.get('.navbar').contains('Registration').click()
    cy.contains('Password')
  })
})