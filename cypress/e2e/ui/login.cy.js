import users from '../../fixtures/users.json'

describe('Login - Loja EBAC', () => {
  it('Deve realizar login com sucesso com usuário válido', () => {
    cy.login(users.valido.email, users.valido.senha)

    cy.url().should('include', '/minha-conta')
    cy.contains('Olá').should('exist')
  })

  it('Não deve autenticar com senha inválida', () => {
    cy.login(users.invalido.email, users.invalido.senha)

    cy.get('.woocommerce-error')
      .should('be.visible')
      .and('contain.text', 'Erro')
  })

  it('Não deve autenticar usuário não cadastrado', () => {
    cy.login(users.naoCadastrado.email, users.naoCadastrado.senha)

    cy.get('.woocommerce-error')
      .should('be.visible')
  })

  it('Não deve permitir login com campos vazios', () => {
    cy.visit('/minha-conta')
    cy.get('input[type="submit"][value="Login"]').click()

    cy.get('.woocommerce-error')
      .should('be.visible')
  })
})
