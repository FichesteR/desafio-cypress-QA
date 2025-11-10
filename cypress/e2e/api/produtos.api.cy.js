describe('API - Produtos', () => {
  let tokenAdmin
  let nomeProduto

  before(() => {
    cy.apiLogin('fulano@qa.com', 'teste').then((res) => {
      expect(res.status).to.eq(200)
      tokenAdmin = res.body.authorization
    })
  })

  it('Deve cadastrar produto com sucesso (admin)', () => {
    nomeProduto = `Produto QA ${Date.now()}`

    cy.criarProduto(tokenAdmin, { nome: nomeProduto }).then((res) => {
      expect(res.status).to.eq(201)
      expect(res.body).to.have.property('message')
      expect(res.body.message).to.contain('Cadastro realizado')
      expect(res.body).to.have.property('_id')
    })
  })

  it('Não deve permitir cadastro de produto com nome duplicado', () => {
    cy.criarProduto(tokenAdmin, { nome: nomeProduto }).then((res) => {
      expect(res.status).to.be.oneOf([400, 409])
      expect(res.body).to.have.property('message')
    })
  })
})
