import { defineConfig } from "cypress";
import dotenv from "dotenv"
dotenv.config({ path: ".env.test" })

export default defineConfig({
    e2e: {
        baseUrl: "http://localhost:5173",
        supportFile : "src/tests/cypress/support/e2e.ts",
        specPattern: "src/tests/cypress/e2e",
    },
    env: {
        API_URL: process.env.API_URL,
    },
    fixturesFolder: "src/tests/cypress/fixtures",
    screenshotsFolder: "src/tests/cypress/screenshots",
    videosFolder: "src/tests/cypress/videos",
    downloadsFolder: "src/tests/cypress/downloads",
});
