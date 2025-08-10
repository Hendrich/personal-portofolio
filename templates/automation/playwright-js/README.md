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

## Cara Pakai

1. Install dependencies:
   ```bash
   npm install
   ```
2. Jalankan test:
   ```bash
   npx playwright test
   ```
3. Buka report:
   ```bash
   npx playwright show-report
   ```

Silakan modifikasi sesuai kebutuhan project.
