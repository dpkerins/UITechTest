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
  it('initially sorts players by rank', () => {
    cy.visit('/welcome')
    cy.get('.card-body .row').first().contains('Tina Smith')
    cy.get('.card-body .row').last().contains('Abel Gupta')
  })
  it('sorts by name when sort dropdown is changed', () => {
    cy.visit('/welcome')
    cy.get('select').select('Name')
    cy.get('.card-body .row').first().contains('Abel Gupta')
    cy.get('.card-body .row').last().contains('Tina Smith')
  })
  it('sorts by nationality when sort dropdown is changed', () => {
    cy.visit('/welcome')
    cy.get('select').select('Nationality')
    cy.get('.card-body .row').first().contains('Bob Jones')
    cy.get('.card-body .row').last().contains('Tina Smith')
  })
})