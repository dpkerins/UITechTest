describe('Registration Page', () => {
  it('Displays Registration Page', () => {
    cy.visit('/')
    cy.contains('Registration')
    cy.get('#formBasicName').should('be.visible')
    cy.get('#formBasicSurname').should('be.visible')
    cy.get('#formBasicEmail').should('be.visible')
    cy.get('#formNationality').should('be.visible');
    cy.get('#password').should('be.visible')
    cy.get('#password-confirm').should('be.visible')
    cy.get('#register-button').should('be.visible');
  })

  it('does not redirect to Welcome page on submit if form not filled in', () => {
    cy.visit('/')
    cy.get('#register-button').click()
    cy.contains('Password')
  })
  
  it('shows the new player in the welcome page list', () => {
    cy.visit('/')
    cy.get('#formBasicName').type('New')
    cy.get('#formBasicSurname').type('Guy')
    cy.get('#formBasicEmail').type('fake@email.com')
    cy.get('select').select('Venezuela')
    cy.get('#password').type('fake_password')
    cy.get('#password-confirm').type('fake_password')
    cy.get('#register-button').click()
    cy.contains('New Guy')
    cy.contains('Venezuela')
    cy.contains('0 points')
  })

  it('should not submit form if passwords do not match', () => {
    cy.visit('/')
    cy.get('#formBasicName').type('New')
    cy.get('#formBasicSurname').type('Guy')
    cy.get('#formBasicEmail').type('fake@email.com')
    cy.get('select').select('Venezuela')
    cy.get('#password').type('fake_password')
    cy.get('#password-confirm').type('different_password')
    cy.get('#register-button').click()
    cy.contains('Password')
  })
})