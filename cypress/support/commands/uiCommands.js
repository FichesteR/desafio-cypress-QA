// Login na área "Minha Conta"
Cypress.Commands.add('login', (email, senha) => {
  cy.visit('/minha-conta')
  cy.get('#username').clear().type(email)
  cy.get('#password').clear().type(senha, { log: false })
  cy.get('input[type="submit"][value="Login"]').click()
})

// Cadastro de novo usuário
Cypress.Commands.add('cadastrarUsuario', (email, senha) => {
  cy.visit('/minha-conta')
  cy.get('#reg_email').clear().type(email)
  cy.get('#reg_password').clear().type(senha, { log: false })
  cy.get('input[type="submit"][value="Register"]').click()
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
  const selector = '.woocommerce-message, .woocommerce-error, .woocommerce-info, .woocommerce-notices-wrapper'

  cy.get('body', { timeout: 10500 }).then(($body) => {
    // Se existir algum container conhecido de mensagem
    if ($body.find(selector).length > 0) {
      cy.get(selector)
        .should('be.visible')
        .and('contain.text', trechoMensagem)
    } else {
      // Fallback: tenta localizar o texto diretamente na página
      cy.contains(trechoMensagem, { timeout: 10500 })
        .should('be.visible')
    }
  })
})

