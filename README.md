## Portfolio QA (ISTQB)

Static website portfolio untuk menampilkan profil, projects, pengalaman, dan booking sesi 1:1.

### Struktur

```
index.html
assets/
	css/style.css
	js/main.js
templates/
	automation/
		playwright-js/
		selenium-java/
		postman-api/
```

### Menjalankan Secara Lokal

Karena ini static site, cukup buka `index.html` di browser atau gunakan server sederhana.

PowerShell (Windows):

```powershell
cd d:\personal-portofolio
python -m http.server 8000
```

Lalu buka http://localhost:8000

### Integrasi Cal.com

1. Buat / login akun di https://cal.com
2. Catat username Anda (misal: `hendrichqa`).
3. (Opsional) Buat Event Type khusus 1:1.
4. Di Event Type, tambahkan custom question: `Mobile Phone` tipe Single-line Text dan tandai Required.
5. Buka `assets/js/main.js` dan ganti:
   ```js
   const calUsername = "your-username";
   const eventType = ""; // bila ingin spesifik isi ID event type.
   ```
6. Simpan dan refresh halaman. Form pra-booking akan memprefill name/email & menaruh phone di notes.

### Personalisasi

Cari placeholder `[Nama Anda]`, `USERNAME`, atau teks pengalaman di `index.html` dan sesuaikan.

### Template Automation

- Playwright JavaScript: `templates/automation/playwright-js/`
- Selenium + TestNG Java: `templates/automation/selenium-java/`
- Postman Collection: `templates/automation/postman-api/`

Anda bisa menambahkan project lain dengan meniru struktur kartu di bagian Projects (`index.html`).

### Lisensi

Silakan gunakan & modifikasi bebas (MIT – tambahkan file LICENSE bila diperlukan).
