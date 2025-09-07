import { test, expect } from "@playwright/test";

// UI Test (uses baseURL from config)
test.describe("Contoh UI", () => {
  test("Halaman contoh memiliki title", async ({ page, baseURL }) => {
    await page.goto(baseURL || "https://labs.hendri.me");
    // Lebih fleksibel: title mungkin berubah sedikit (misal tambahan env label)
    await expect(page).toHaveTitle(/script\s+labs/i);
  });
});

// API Test (mencari endpoint hidup yang mengembalikan 200)
// Jika root 404, kita coba beberapa kandidat umum seperti /health atau /status.
test.describe("Contoh API", () => {
  test("API base reachable (kandidat endpoint)", async ({ request }) => {
    const apiBase = process.env.API_URL || "https://api.hendri.me"; // Override: API_URL=https://api.staging.example.com npx playwright test
    const candidates = ["", "/health", "/status", "/api/health"]; // bisa ditambah sesuai kebutuhan
    const results = [];
    for (const path of candidates) {
      const url = apiBase.replace(/\/$/, "") + path;
      const res = await request.get(url, { timeout: 10_000 });
      results.push({ path: path || "/", status: res.status() });
      if (res.status() === 200) {
        // Valid endpoint ditemukan
        expect(res.status(), `Endpoint '${path || "/"}' OK`).toBe(200);
        return;
      }
    }
    // Tidak ada 200, beri pesan jelas
    throw new Error(
      "Tidak menemukan endpoint API dengan status 200. Status yang diterima: " +
        results.map((r) => `${r.path}:${r.status}`).join(", ") +
        "\nSet API_URL atau perbarui daftar candidates di tests/example.spec.js"
    );
  });
});
