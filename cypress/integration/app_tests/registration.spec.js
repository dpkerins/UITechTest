describe('Registration Page', () => {
  it('Displays Registration Page', () => {
    cy.visit('/')
    cy.contains('Registration')
    cy.get('#formBasicName').should('be.visible')
    cy.get('#formBasicSurname').should('be.visible')
    cy.get('#formBasicEmail').should('be.visible')
    cy.get('#formNationality').should('be.visible');
    cy.get('#formBasicPassword').should('be.visible')
    cy.get('#formBasicPasswordConfirmation').should('be.visible')
    cy.contains('Submit').should('be.visible');
  })

  it('does not redirect to Welcome page on submit if form not filled in', () => {
    cy.visit('/')
    cy.contains('Submit').click()
    cy.contains('Password')
  })
  
  it('shows the new player in the welcome page list', () => {
    cy.visit('/')
    cy.get('#formBasicName').type('New')
    cy.get('#formBasicSurname').type('Guy')
    cy.get('#formBasicEmail').type('fake@email.com')
    cy.get('select').select('Venezuela')
    cy.get('#formBasicPassword').type('fake_password')
    cy.get('#formBasicPasswordConfirmation').type('fake_password')
    cy.contains('Submit').click()
    cy.contains('New Guy')
    cy.contains('Venezuela')
    cy.contains('0 points')
  })
})