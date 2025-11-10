# Desafio de Automação - QA Sênior

Repositório destinado ao desafio técnico de automação **UI e API** utilizando Cypress.

## Estrutura do projeto

```text
cypress/
  e2e/
    ui/
      login.cy.js       -> Fluxo crítico de autenticação
      produtos.cy.js    -> Adição de produtos e variações
      cadastro.cy.js    -> Cadastro de novos usuários
  fixtures/
    users.json          -> Massa para login
    produtos.json       -> Massa para produtos simples/variáveis
    cadastro.json       -> Massa para cadastros de novos usuários
  support/
    commands.js         -> Custom Commands reutilizáveis
