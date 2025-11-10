describe('API - Carrinhos', () => {
  let tokenAdmin
  let tokenUser
  let produtoId

  before(() => {
    // Login admin + criação de produto
    cy.apiLogin('fulano@qa.com', 'teste')
      .then((res) => {
        expect(res.status).to.eq(200)
        tokenAdmin = res.body.authorization

        return cy.criarProduto(tokenAdmin)
      })
      .then((resProduto) => {
        expect(resProduto.status).to.eq(201)
        produtoId = resProduto.body._id
      })

    // Cria usuário comum + login
    const emailUser = `user_${Date.now()}@teste.com`

    cy.criarUsuario({ email: emailUser, administrador: 'false' })
      .then((resUser) => {
        expect(resUser.status).to.eq(201)

        return cy.apiLogin(emailUser, 'teste')
      })
      .then((resLogin) => {
        expect(resLogin.status).to.eq(200)
        tokenUser = resLogin.body.authorization
      })
  })

  it('Deve criar carrinho com produto válido', () => {
    cy.criarCarrinho(tokenUser, {
      produtos: [
        {
          idProduto: produtoId,
          quantidade: 1,
        },
      ],
    }).then((res) => {
      expect(res.status).to.eq(201)
      expect(res.body).to.have.property('message')
    })
  })

  it('Não deve criar carrinho com produto inexistente', () => {
    cy.criarCarrinho(tokenUser, {
      produtos: [
        {
          idProduto: 'id_inexistente_123',
          quantidade: 1,
        },
      ],
    }).then((res) => {
      expect(res.status).to.be.oneOf([400, 404])
      expect(res.body).to.have.property('message')
    })
  })
})
