describe('API - Login', () => {
  it('Deve autenticar com sucesso e retornar token', () => {
    cy.apiLogin('fulano@qa.com', 'teste').then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body).to.have.property('authorization')
    })
  })

  it('Não deve autenticar com senha inválida', () => {
    cy.apiLogin('fulano@qa.com', 'senha_incorreta').then((res) => {
      expect(res.status).to.eq(401)
      expect(res.body).to.have.property('message')
    })
  })
})
