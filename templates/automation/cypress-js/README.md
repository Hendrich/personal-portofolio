# Cypress Automation Template

Struktur dasar project automation testing menggunakan Cypress (JavaScript).

## Fitur

- Contoh test UI sederhana
- Struktur folder best practice
- Konfigurasi dasar cypress.json
- Contoh assertion dan selector

## Menjalankan Test ke https://labs.hendri.me/

1. Install dependencies:
   ```bash
   npm install
   ```
2. Set baseUrl (opsional) di `cypress.config.js` atau langsung gunakan command run:
   ```bash
   npx cypress open
   ```
3. Headless run contoh:
   ```bash
   npx cypress run --browser chrome
   ```
4. Tambah spec baru di `cypress/e2e/` dan gunakan `cy.visit('https://labs.hendri.me/')`.

## Struktur Folder

- `cypress/`
  - `integration/` : Test case
  - `fixtures/` : Data dummy
  - `support/` : Helper dan custom command
- `cypress.json` : Konfigurasi Cypress

## Referensi

- [Cypress Docs](https://docs.cypress.io/)
