// Basic Playwright config
// Dokumentasi: https://playwright.dev/docs/test-configuration
import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  retries: 1,
  use: {
    headless: true,
    viewport: { width: 1280, height: 800 },
    trace: "on-first-retry",
  },
  reporter: [["html", { open: "never" }]],
});
