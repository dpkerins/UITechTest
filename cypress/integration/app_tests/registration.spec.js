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
  
  it('shows the new player in the welcome page list', () => {
    cy.visit('/')
    cy.get('#formBasicName').type('New')
    cy.get('#formBasicSurname').type('Guy')
    cy.get('#formBasicEmail').type('fake@email.com')
    cy.get('#formBasicPassword').type('fake_password')
    cy.get('#formBasicPasswordConfirmation').type('fake_password')
    cy.contains('Submit').click()
    cy.contains('New Guy')
  })
})