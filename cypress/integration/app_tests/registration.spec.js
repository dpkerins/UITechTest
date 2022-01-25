describe('Registration Page', () => {
  it('Displays Registration Page', () => {
    cy.visit('/')
    cy.contains('Registration')
    cy.get('#formBasicName').should('be.visible')
    cy.get('#formBasicSurname').should('be.visible')
    cy.get('#formBasicEmail').should('be.visible')
    cy.get('#formBasicPassword').should('be.visible')
    cy.get('#formBasicPasswordConfirmation').should('be.visible')
    cy.contains('Submit').should('be.visible');
  })

  it('redirects to Welcome page on submit', () => {
    cy.visit('/')
    cy.contains('Submit').click()
    cy.contains('Welcome')
  })
})