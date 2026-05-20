describe('Login', () => {
  // Cenario 1
  it('Login com sucesso', () => {
    // abre o app
    cy.visit('https://automationpratice.com.br/login')
    // preenche o email
    cy.get('#user').type('teste@teste.com')
    // preencher senha
    cy.get('#password').type('123456')
    // clicar em logar
    cy.get('#btnLogin').click()
    // valida
    cy.get('#swal2-title').should('have.text', 'Login realizado')
  })

  // Cenario 2
  it('Login com senha inválida', () => {
    cy.visit('https://automationpratice.com.br/login')
    cy.get('#user').type('teste@teste.com')
    cy.get('#password').type('123')
    cy.get('#btnLogin').click()
    cy.get('.invalid_input')
      .should('have.text', 'Senha inválida.')
      .should('be.visible')
  })

  // Cenario 3
  it('Login com e-mail inválido', () => {
    cy.visit('https://automationpratice.com.br/login')
    cy.get('#user').type('teste')
    cy.get('#password').type('123456')
    cy.get('#btnLogin').click()
    cy.get('.invalid_input')
      .should('have.text', 'E-mail inválido.')
      .should('be.visible')
  })

})
