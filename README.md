# 🧪 Desafio Técnico QA – Automação UI e API

Este projeto reúne a automação dos testes **Web (UI)** e **API**, desenvolvidos como parte do desafio técnico para a vaga de **QA Sênior**.

A solução foi construída com foco em:
- Cobrir cenários críticos de negócio (login, cadastro, produtos e carrinho);
- Separar claramente as camadas de UI e API;
- Aplicar boas práticas de automação (sem herança, com custom commands e código limpo);
- Facilitar manutenção, leitura e evolução do projeto.

---

## 🚀 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)
- JavaScript (ES6+)
- Mocha / Chai (nativos do Cypress)
- Git / GitHub

---

## ⚙️ Instalação das dependências

1. Clonar o repositório:

```bash
git clone https://github.com/FichesteR/desafio-cypress-QA.git
cd desafio-cypress-QA
```

2. Instalar as dependências:

```bash
npm install
```

---

## 🧭 Como executar os testes

### ▶️ Executar todos os testes (UI + API)

```bash
npx cypress run
```

### 🧩 Executar somente os testes de UI

```bash
npx cypress run --spec "cypress/e2e/ui/**/*.cy.js"
```

ou

```bash
npm run test:ui
```

### ⚙️ Executar somente os testes de API

```bash
npx cypress run --spec "cypress/e2e/api/**/*.cy.js"
```

ou

```bash
npm run test:api
```

### 👀 Executar em modo interativo

```bash
npx cypress open
```

Selecione o navegador desejado e execute os testes das pastas:

- `cypress/e2e/ui` → testes de interface (loja EBAC)
- `cypress/e2e/api` → testes de API (Serverest)

---

## 🧱 Estrutura do projeto

```text
desafio-cypress-QA/
├── cypress.config.js          # Configuração global do Cypress
├── package.json               # Dependências e scripts de execução
├── README.md                  # Documentação do desafio
├── BUGS.md                    # Registro de bugs e inconsistências observadas
└── cypress/
    ├── e2e/
    │   ├── ui/
    │   │   ├── login.cy.js        # Cenários de login (UI)
    │   │   ├── produtos.cy.js     # Cenários de produtos e carrinho (UI)
    │   │   └── cadastro.cy.js     # Cenários de cadastro (UI)
    │   └── api/
    │       ├── login.api.cy.js        # Cenários de login (API)
    │       ├── usuarios.api.cy.js     # Cenários de usuários (API)
    │       ├── produtos.api.cy.js     # Cenários de produtos (API)
    │       └── carrinhos.api.cy.js    # Cenários de carrinhos (API)
    │
    ├── support/
    │   ├── e2e.js                 # Carregamento global dos comandos
    │   └── commands/
    │       ├── uiCommands.js      # Custom commands para UI
    │       └── apiCommands.js     # Custom commands para API
    │
    └── fixtures/
        ├── users.json             # Massa estática para testes de UI (login)
        ├── produtos.json          # Massa estática para testes de UI (produtos)
        └── cadastro.json          # Massa estática para testes de UI (cadastro)
```

---

## 🌐 Ambientes utilizados

| Camada | URL Base |
|--------|-----------|
| UI     | `http://lojaebac.ebaconline.art.br` |
| API    | `https://serverest.dev` |

- `baseUrl` apontando para a **loja EBAC** (UI);
- `env.apiUrl` utilizado pelos comandos da **API (Serverest)**;
- As camadas são independentes, mas compartilham a mesma base de automação.

---

## 📋 Lista completa de cenários levantados (UI + API) e justificativas

### 🔐 Login (UI)

1. ✅ Login com credenciais válidas.  
2. ✅ Login com senha inválida.  
3. ✅ Login com usuário/e-mail não cadastrado.  
4. ✅ Tentativa de login com campos vazios.  

**Justificativa:**  
Fluxo crítico de autenticação — garante o acesso e a segurança do usuário, servindo como base para todos os demais fluxos do sistema.

---

### 👤 Cadastro (UI)

1. ✅ Cadastro de novo usuário com sucesso.  
2. ✅ Cadastro com e-mail já cadastrado.  

**Justificativa:**  
Garante integridade da base de clientes e evita duplicidade de cadastros.

---

### 🛍️ Produtos & Carrinho (UI)

1. ✅ Adicionar produto simples.  
2. ✅ Adicionar produto variável sem variação (erro).  
3. ✅ Adicionar produto variável com seleção.  

**Justificativa:**  
Valida o fluxo essencial de compra, garantindo consistência na exibição, seleção e adição de produtos ao carrinho.

---

### 🔐 Login (API - Serverest)

1. ✅ Login com sucesso.  
2. ✅ Login com senha inválida.  

**Justificativa:**  
Garante autenticação e proteção contra acessos indevidos, validando o comportamento correto do endpoint de login.

---

### 👤 Usuários (API - Serverest)

1. ✅ Cadastro de novo usuário.  
2. ✅ Cadastro com e-mail duplicado.  

**Justificativa:**  
Garante integridade de dados e valida a regra de unicidade de e-mail no cadastro de usuários.

---

### 📦 Produtos (API - Serverest)

1. ✅ Cadastro de produto (admin).  
2. ✅ Produto duplicado (erro).  

**Justificativa:**  
Valida o controle de estoque e as permissões administrativas de cadastro de produtos.

---

### 🛒 Carrinhos (API - Serverest)

1. ✅ Criar carrinho com produto válido.  
2. ✅ Criar carrinho com produto inexistente.  

**Justificativa:**  
Garante integridade entre produtos, usuários e pedidos, validando o fluxo final de compra via API.

---

## 💎 Boas práticas aplicadas

- Separação entre UI e API;  
- Custom Commands reutilizáveis;  
- Código funcional e simples (sem herança);  
- Cenários críticos bem definidos e priorizados;  
- Dados dinâmicos gerados com `Date.now()`;  
- Independência total entre execuções;  
- Estrutura limpa, modular e escalável.

---

## 🐞 BUGS / Inconsistências

Registro de inconsistências no arquivo [`BUGS.md`](./BUGS.md).

---

## 👩‍💻 Autor

**Vinícius Planellis**  
Desafio Técnico – INDT

---

## 🏁 Conclusão

Os testes cobrem os fluxos críticos tanto de UI quanto de API, assegurando qualidade e estabilidade das principais funcionalidades da aplicação.
O projeto reflete uma abordagem estruturada, limpa e sustentável de automação. Alinhada às melhores práticas exigidas por um time de qualidade sênior.
