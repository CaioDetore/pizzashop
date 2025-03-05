import { defineConfig, devices } from "@playwright/test";

import { env } from "./src/env";

export default defineConfig({
  testDir: "./test",
  fullyParallel: true,
  // forbidOnly: !!env.CI,
  // retries: env.CI ? 2 : 0,
  // workers: env.CI ? 1 : undefined,
  // reporter: "html",
  use: {
    baseURL: "http://localhost:50789",
  },
  webServer: {
    command: "npm run dev:test",
    url: "http://localhost:50789",
    // reuseExistingServer: !env.CI,
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});
