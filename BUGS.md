# BUGS / Inconsistências observadas

## BUG-001 - Mensagem de sucesso inconsistente ao adicionar produto ao carrinho
- **Área:** Produtos / Carrinho
- **Passos:**
  1. Acessar /produtos
  2. Selecionar produto simples sem especificações necessárias (tamanho, cor, quantidade)
  3. Clicar em "Adicionar ao carrinho"
- **Resultado atual:** Mensagem de sucesso nem sempre exibida; carrinho às vezes não atualiza.
- **Resultado esperado:** Mensagem e atualização do carrinho consistentes.
- **Impacto:** Gera flakiness nos testes automáticos e prejudica UX.

## BUG-002 - Traduções de botões e categorias que estão em inglês
- **Área:** Página inicial
- **Passos:**
  1. Acessar a Página inicial
  2. Role a página até apresentar os produtos em destaque
  3. Passe o mouse em algum produto para visualizar os botões
  4. Pare o mouse em cima de um botão que estava ocultado para visualizar a legenda/tooltip/dica sobre o botão 
- **Resultado atual:** As legendas/tooltips/dicas estão em inglês e as categorias também
- **Resultado esperado:** Realizar a tradução correta para Português (Brasil)
- **Impacto:** Despradonização da UI e prejudica o entendimento das informações aos usúario bem como a UX.
