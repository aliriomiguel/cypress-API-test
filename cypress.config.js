const { defineConfig } = require('cypress')

module.exports = defineConfig({
  
  e2e: {
    baseUrl: "https://petstore.swagger.io/v2/",
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/integration/**/*.feature',
    supportFile: 'cypress/support/index.js',
    responseTimeout: 120e3,
    failOnStatusCode: false
  },
  video: true,
  videosFolder: "videos"
})