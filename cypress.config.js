import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        supportFile : "src/tests/cypress/support/e2e.ts",
        specPattern: "src/tests/cypress/e2e",
    },
    fixturesFolder: "src/tests/cypress/fixtures",
    screenshotsFolder: "src/tests/cypress/screenshots",
    videosFolder: "src/tests/cypress/videos",
    downloadsFolder: "src/tests/cypress/downloads",
});
