const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://lojaebac.ebaconline.art.br',
    env: {
      apiUrl: 'https://serverest.dev'
    },
    video: false,
    setupNodeEvents(on, config) {
      return config
    },
  },
})
