import cadastro from '../../fixtures/cadastro.json'

describe('Cadastro de Usuário - Loja EBAC', () => {
  it('Deve cadastrar novo usuário com sucesso', () => {
    const emailDinamico = `teste_${Date.now()}@teste.com`

    cy.cadastrarUsuario(emailDinamico, cadastro.existente.senhaValida)

    cy.url().should('include', '/minha-conta')
    cy.contains('Olá').should('exist')
  })

  it('Não deve permitir cadastro com email já cadastrado', () => {
    cy.cadastrarUsuario(cadastro.existente.emailExistente, cadastro.existente.senhaValida)
    cy.validarMensagemSistema('Erro: Uma conta já está registrada com seu endereço de e-mail. Faça login.')
  })

  it('Não deve permitir cadastro com email incorreto', () => {
    cy.cadastrarUsuario(cadastro.invalido.emailIncorreto, cadastro.invalido.senhaCorreta)
    cy.validarMensagemSistema('Erro: Informe um endereço de e-mail válido.')
  })
})
