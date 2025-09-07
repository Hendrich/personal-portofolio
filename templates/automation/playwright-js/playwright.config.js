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
    // Base URL default; can be overridden: BASE_URL=https://staging.example.com npx playwright test
    baseURL: process.env.BASE_URL || "https://labs.hendri.me",
    // Capture screenshot untuk semua test (termasuk yang pass)
    screenshot: "on",
    // Simpan video hanya saat gagal (hemat ruang). Ganti 'on' jika ingin semua.
    video: "retain-on-failure",
    trace: "on-first-retry",
  },
  reporter: [["html", { open: "never" }]],
});
