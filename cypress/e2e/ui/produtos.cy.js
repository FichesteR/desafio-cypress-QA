import produtos from '../../fixtures/produtos.json';

describe('Produtos e Carrinho - Loja EBAC', () => {
  it('Não deve permitir adicionar produto simples sem selecionar variações', () => {
    cy.visit('/produtos')
    cy.contains('.product', produtos.simples.nome).click()
    cy.get('.single_add_to_cart_button').click()

    cy.get('.woocommerce-error')
      .should('be.visible')
  })

  it('Deve adicionar produto variável ao carrinho após selecionar variações', () => {
    cy.adicionarProdutoAoCarrinho(produtos.variavel)

    cy.validarMensagemSistema('“Ajax Full-Zip Sweatshirt” foi adicionado no seu carrinho.')
    cy.contains('.button', 'Ver carrinho').click()
    cy.contains(produtos.variavel.nome).should('exist')
  })
})