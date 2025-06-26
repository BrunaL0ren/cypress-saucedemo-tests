const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    supportFile: false, // Desativa a exigência do arquivo de suporte
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
