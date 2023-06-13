describe('Main Tests', () => {
  it('Checks home load', () => {
    cy.visit('http://localHost:3000')
  })


  it('Checking input functionality for #name-input', () => {
    cy.visit('http://localHost:3000/pizza')
    
    cy.get('#name-input').type('Jesus Olaiz')
  })
})