# Template Playwright JavaScript

Struktur minimal untuk memulai automation UI (dan sedikit API) menggunakan Playwright.

## Fitur

- Contoh test UI login fiktif
- Contoh test API GET
- Konfigurasi report HTML bawaan Playwright

## Struktur

```
playwright.config.js
package.json
tests/
  example.spec.js
```

## Menjalankan Test ke https://labs.hendri.me/

1. Install dependencies:
   ```bash
   npm install
   ```
2. Jalankan test (default akan mencari file di folder `tests`):
   ```bash
   npx playwright test
   ```
3. Contoh visit:
   ```js
   await page.goto("https://labs.hendri.me/");
   ```
4. Buka report:
   ```bash
   npx playwright show-report
   ```

Silakan modifikasi sesuai kebutuhan project.
