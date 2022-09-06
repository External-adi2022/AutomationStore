const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    registerUrl: 'https://demo.nopcommerce.com/register?returnUrl=%2F',
    loginUrl: 'https://demo.nopcommerce.com/login?returnUrl=%2F',
    adminUrl: 'https://admin-demo.nopcommerce.com/login',
    addProductUrl: 'https://admin-demo.nopcommerce.com/Admin/Product/Create',
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/report/mochawesome-report',
    overwrite: false,
    html: true,
    json: false,
    timestamp: 'mmddyyyy_HHMMss',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://demo.nopcommerce.com/',
  },
})
