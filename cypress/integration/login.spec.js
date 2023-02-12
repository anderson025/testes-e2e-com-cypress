it('successfully logs in', () => {
  cy.intercept('GET', '**/').as('getNotes')

  cy.login(
    Cypress.env('USER_EMAIL'),
    Cypress.env('USER_PASSWORD'),
    { cacheSession: false } 
  )

  cy.wait('@getNotes')
})