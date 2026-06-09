import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://sauce-demo.myshopify.com/",
    screenshotOnRunFailure: true,
    video: false,
    specPattern: "cypress/e2e/**/*.cy.ts",
    setupNodeEvents(on, config) {
      // Implement node event listeners here if needed
    },
  },
});
