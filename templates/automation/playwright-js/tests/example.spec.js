import { test, expect } from "@playwright/test";

test.describe("Contoh UI", () => {
  test("Halaman contoh memiliki title", async ({ page }) => {
    await page.goto("https://example.com");
    await expect(page).toHaveTitle(/Example/);
  });
});

test.describe("Contoh API", () => {
  test("GET example.com returns 200", async ({ request }) => {
    const res = await request.get("https://example.com");
    expect(res.status()).toBe(200);
  });
});
