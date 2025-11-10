// cypress/support/commands/apiCommands.js

const apiUrl = () => Cypress.env('apiUrl') || 'https://serverest.dev'

// LOGIN
Cypress.Commands.add('apiLogin', (email, password) => {
  return cy.request({
    method: 'POST',
    url: `${apiUrl()}/login`,
    body: { email, password },
    failOnStatusCode: false,
  })
})

// USUÁRIOS
Cypress.Commands.add('criarUsuario', (overrides = {}) => {
  const body = {
    nome: 'Usuario QA',
    email: `qa_${Date.now()}@teste.com`,
    password: 'teste',
    administrador: 'true',
    ...overrides,
  }

  return cy.request({
    method: 'POST',
    url: `${apiUrl()}/usuarios`,
    body,
    failOnStatusCode: false,
  })
})

// PRODUTOS
Cypress.Commands.add('criarProduto', (token, overrides = {}) => {
  const body = {
    nome: `Produto QA ${Date.now()}`,
    preco: 100,
    descricao: 'Produto teste automacao',
    quantidade: 5,
    ...overrides,
  }

  return cy.request({
    method: 'POST',
    url: `${apiUrl()}/produtos`,
    headers: { Authorization: token },
    body,
    failOnStatusCode: false,
  })
})

// CARRINHOS
Cypress.Commands.add('criarCarrinho', (token, body) => {
  return cy.request({
    method: 'POST',
    url: `${apiUrl()}/carrinhos`,
    headers: { Authorization: token },
    body,
    failOnStatusCode: false,
  })
})
