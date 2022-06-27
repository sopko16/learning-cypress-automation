describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it and verify
    // that the value has been updated
    cy.get(".action-email")
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })

  it('Runs a second arbitrary test', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('A Second Test', () => {

  it('Runs a third arbitrary test', () => {
    cy.visit('https://www.google.com')
  })
})