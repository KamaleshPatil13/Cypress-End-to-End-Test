import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    experimentalModifyObstructiveThirdPartyCode: true,
    baseUrl: 'http://localhost:5173',
  },
});
