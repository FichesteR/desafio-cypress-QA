// Login na área "Minha Conta"
Cypress.Commands.add('login', (email, senha) => {
  cy.visit('/minha-conta')
  cy.get('#username').clear().type(email)
  cy.get('#password').clear().type(senha, { log: false })
  cy.get('button[name="login"]').click()
})

// Cadastro de novo usuário
Cypress.Commands.add('cadastrarUsuario', (email, senha) => {
  cy.visit('/minha-conta')
  cy.get('#reg_email').clear().type(email)
  cy.get('#reg_password').clear().type(senha, { log: false })
  cy.get('button[name="register"]').click()
})

// Adicionar produto ao carrinho
Cypress.Commands.add('adicionarProdutoAoCarrinho', (produto) => {

  cy.visit('/produtos')
  cy.contains('.product', produto.nome).click()

  if (produto.tamanho) {
    cy.get(`.button-variable-item-${produto.tamanho}`).click()
  }

  if (produto.cor) {
    cy.get(`.button-variable-item-${produto.cor}`).click()
  }

  if (produto.quantidade && produto.quantidade > 1) {
    cy.get('.input-text.qty').clear().type(produto.quantidade)
  }

  cy.get('.single_add_to_cart_button').click()
})

// Validação genérica de mensagens do WooCommerce
Cypress.Commands.add('validarMensagemSistema', (trechoMensagem) => {
  cy.get('.woocommerce-message, .woocommerce-error, .woocommerce-info')
    .should('be.visible')
    .and('contain.text', trechoMensagem)
})
