describe('API - Usuários', () => {
  it('Deve cadastrar novo usuário com sucesso', () => {
    cy.criarUsuario().then((res) => {
      expect(res.status).to.eq(201)
      expect(res.body).to.have.property('message')
      expect(res.body.message).to.contain('Cadastro realizado')
      expect(res.body).to.have.property('_id')
    })
  })

  it('Não deve permitir cadastro com email já existente', () => {
    const email = `qa_dup_${Date.now()}@teste.com`

    cy.criarUsuario({ email }).then((res1) => {
      expect(res1.status).to.eq(201)

      cy.criarUsuario({ email }).then((res2) => {
        expect(res2.status).to.eq(400)
        expect(res2.body).to.have.property('message')
      })
    })
  })
})
