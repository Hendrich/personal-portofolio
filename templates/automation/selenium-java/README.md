# Template Selenium + TestNG (Java)

Kerangka sederhana untuk automation UI menggunakan Selenium WebDriver & TestNG.

## Fitur

- Struktur Page Object sederhana
- Contoh test visit halaman public
- Konfigurasi TestNG XML

## Struktur

```
pom.xml
src/test/java/
  base/BaseTest.java
  pages/ExamplePage.java
  tests/ExampleTest.java
testng.xml
```

## Menjalankan Test ke https://labs.hendri.me/

1. Jalankan build & test:

```bash
mvn test
```

2. Di dalam test/ page object, gunakan:

```java
driver.get("https://labs.hendri.me/");
```

3. Tambah test baru di folder `tests`.

Silakan tingkatkan sesuai kebutuhan (report, parallel, dll).
