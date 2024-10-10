import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    experimentalModifyObstructiveThirdPartyCode: true,
    baseUrl: 'https://example.cypress.io ',
  },
});
