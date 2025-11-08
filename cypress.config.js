const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      webUrl: 'https://lojaebac.ebaconline.art.br',
      apiUrl: 'https://serverest.dev'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});