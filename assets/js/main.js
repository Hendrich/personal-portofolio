const langData = {
  id: {
    homeTitle: "Hai, saya Hendri Christianto",
    homeDesc:
      "Seorang Quality Assurance Engineer dengan sertifikasi ISTQB. Fokus pada test automation, peningkatan kualitas produk, dan continuous improvement.",
    homeBtn: "Booking 1:1",
    homeProjects: "Lihat Projects",
    projectsTitle: "Projects & Templates",
    projectsDesc:
      "Beberapa contoh pekerjaan / eksperimen saya serta template automation testing gratis yang bisa Anda unduh.",
    detail: "Detail",
    download: "Download",
    visitSite: "Kunjungi Website",
    expHeading: "Pengalaman",
    expIntro:
      "Ringkasan perjalanan profesional saya di bidang Quality Assurance.",
    contactTitle: "Contact Me",
    contactDesc:
      "Ingin diskusi atau konsultasi 1:1? Silakan isi nomor ponsel Anda terlebih dahulu untuk membuka jadwal booking.",
    bookingBtn: "Lanjutkan ke Booking",
    bookingMsg:
      "Setelah submit, Anda akan diarahkan ke halaman booking Cal.com.<br />",
    bookingRedirect: "Jika tidak otomatis redirect, ",
    bookingLink: "klik di sini untuk booking jadwal",
    project1Title: "Automation Cypress (JS)",
    project1Desc:
      "Contoh struktur dasar automation UI + API menggunakan Cypress + laporan sederhana.",
    project2Title: "Automation Playwright (JS)",
    project2Desc:
      "Contoh struktur dasar automation UI + API menggunakan Playwright + laporan sederhana.",
    project3Title: "Automation Selenium + TestNG (Java)",
    project3Desc:
      "Kerangka minimal untuk UI regression dengan Selenium, TestNG & reporting.",
    project4Title: "Website Script Labs",
    project4Desc:
      "Website Script Labs adalah aplikasi sandbox / latihan untuk QA membangun & mengeksplor automation (UI & API) serta skenario pengujian lain secara aman. Menyediakan elemen dinamis, form, dan endpoint API realistis sebagai target latihan.",
    // Project bullets
    project1B1: "Page Object Model dasar",
    project1B2: "Config environment",
    project1B3: "Contoh test API sederhana",
    project2B1: "Page Object Model dasar",
    project2B2: "Config environment",
    project2B3: "Contoh test API sederhana",
    project3B1: "Base test class",
    project3B2: "Driver management",
    project3B3: "Sample assertion",
    project4B1: "Website Script Labs",
    project4B2: "Struktur Node.js + React sederhana",
    project4B3: "CRUD API dengan Express + Supabase",
    exp1Time: "2024 - Sekarang",
    exp1Job: "Quality Assurance Engineer - [Perusahaan A]",
    exp1Desc1:
      "Membangun & memelihara test automation (UI + API) yang mengurangi waktu regression >50%.",
    exp1Desc2:
      "Integrasi pipeline CI/CD (GitHub Actions / Jenkins) untuk otomatisasi test.",
    exp1Desc3:
      "Kolaborasi dengan tim dev untuk shift-left testing & quality gates.",
  },
  en: {
    homeTitle: "Hi, I'm Hendri Christianto",
    homeDesc:
      "A Quality Assurance Engineer with ISTQB certification. Focused on test automation, product quality improvement, and continuous improvement.",
    homeBtn: "Book 1:1",
    homeProjects: "See Projects",
    projectsTitle: "Projects & Templates",
    projectsDesc:
      "Some of my work samples / experiments and free automation testing templates you can download.",
    detail: "Detail",
    download: "Download",
    visitSite: "Visit Website",
    expHeading: "Experiences",
    expIntro: "My professional journey in Quality Assurance.",
    contactTitle: "Contact Me",
    contactDesc:
      "Want to discuss or consult 1:1? Please enter your phone number first to open the booking schedule.",
    bookingBtn: "Continue to Booking",
    bookingMsg:
      "After submitting, you will be redirected to the Cal.com booking page.<br />",
    bookingRedirect: "If you are not automatically redirected, ",
    bookingLink: "click here to book a schedule",
    project1Title: "Automation Cypress (JS)",
    project1Desc:
      "Basic structure for UI + API automation using Cypress + simple reporting.",
    project2Title: "Automation Playwright (JS)",
    project2Desc:
      "Basic structure for UI + API automation using Playwright + simple reporting.",
    project3Title: "Automation Selenium + TestNG (Java)",
    project3Desc:
      "Minimal framework for UI regression with Selenium, TestNG & reporting.",
    project4Title: "Website Script Labs",
    project4Desc:
      "Website Script Labs is a sandbox practice web app for QA engineers to build and explore automation (UI & API) and other test scenarios safely. It provides dynamic elements, forms, and realistic API endpoints as training targets.",
    // Project bullets
    project1B1: "Basic Page Object Model",
    project1B2: "Environment config",
    project1B3: "Simple API test example",
    project2B1: "Basic Page Object Model",
    project2B2: "Environment config",
    project2B3: "Simple API test example",
    project3B1: "Base test class",
    project3B2: "Driver management",
    project3B3: "Sample assertion",
    project4B1: "Website Script Labs",
    project4B2: "Struktur Node.js + React sederhana",
    project4B3: "CRUD API dengan Express + Supabase",
    exp1Time: "2024 - Present",
    exp1Job: "Quality Assurance Engineer - [Company A]",
    exp1Desc1:
      "Built & maintained test automation (UI + API) reducing regression time by >50%.",
    exp1Desc2:
      "Integrated CI/CD pipeline (GitHub Actions / Jenkins) for automated testing.",
    exp1Desc3:
      "Collaborated with dev team for shift-left testing & quality gates.",
  },
};

function setLang(lang) {
  localStorage.setItem("lang", lang);
  document.getElementById("langID").classList.toggle("active", lang === "id");
  document.getElementById("langEN").classList.toggle("active", lang === "en");
  // Home
  const homeTitle = document.querySelector(".hero-title");
  if (homeTitle)
    homeTitle.innerHTML = langData[lang].homeTitle
      .replace("[Nama Anda]", '<span class="accent">Nama Anda</span>')
      .replace("[Your Name]", '<span class="accent">Your Name</span>');
  const homeDesc = document.querySelector(".hero-desc");
  if (homeDesc) homeDesc.textContent = langData[lang].homeDesc;
  const homeBtn = document.querySelector(".hero-btn");
  if (homeBtn) homeBtn.textContent = langData[lang].homeBtn;
  const homeProjects = document.querySelector(".hero-projects");
  if (homeProjects) homeProjects.textContent = langData[lang].homeProjects;
  // Projects
  const projectsTitle = document.querySelector(".projects-title");
  if (projectsTitle) projectsTitle.textContent = langData[lang].projectsTitle;
  const projectsDesc = document.querySelector(".projects-desc");
  if (projectsDesc) projectsDesc.textContent = langData[lang].projectsDesc;
  document
    .querySelectorAll(".btn-detail")
    .forEach((btn) => (btn.textContent = langData[lang].detail));
  document
    .querySelectorAll(".btn-download")
    .forEach((btn) => (btn.textContent = langData[lang].download));
  // Specific visit site buttons (e.g., project 4)
  document
    .querySelectorAll(".btn-visit-site")
    .forEach((btn) => (btn.textContent = langData[lang].visitSite));
  // Project 1 (card)
  const project1Title = document.querySelector(".project-title-1");
  if (project1Title) project1Title.textContent = langData[lang].project1Title;
  const project1Desc = document.querySelector(".project-desc-1");
  if (project1Desc) project1Desc.textContent = langData[lang].project1Desc;
  const project2Title = document.querySelector(".project-title-2");
  if (project2Title) project2Title.textContent = langData[lang].project2Title;
  const project2Desc = document.querySelector(".project-desc-2");
  if (project2Desc) project2Desc.textContent = langData[lang].project2Desc;
  const project3Title = document.querySelector(".project-title-3");
  if (project3Title) project3Title.textContent = langData[lang].project3Title;
  const project3Desc = document.querySelector(".project-desc-3");
  if (project3Desc) project3Desc.textContent = langData[lang].project3Desc;
  const project4Title = document.querySelector(".project-title-4");
  if (project4Title) project4Title.textContent = langData[lang].project4Title;
  const project4Desc = document.querySelector(".project-desc-4");
  if (project4Desc) project4Desc.textContent = langData[lang].project4Desc;
  // Project bullets
  const mapBullets = [
    ["project1-b1", "project1B1"],
    ["project1-b2", "project1B2"],
    ["project1-b3", "project1B3"],
    ["project2-b1", "project2B1"],
    ["project2-b2", "project2B2"],
    ["project2-b3", "project2B3"],
    ["project3-b1", "project3B1"],
    ["project3-b2", "project3B2"],
    ["project3-b3", "project3B3"],
    ["project4-b1", "project4B1"],
    ["project4-b2", "project4B2"],
    ["project4-b3", "project4B3"],
  ];
  mapBullets.forEach(([cls, key]) => {
    const el = document.querySelector(`.${cls}`);
    if (el && langData[lang][key]) el.textContent = langData[lang][key];
  });
  // Experience
  const expTitle = document.querySelector(".exp-title");
  if (expTitle) expTitle.textContent = langData[lang].expHeading;
  const expIntro = document.querySelector(".exp-desc");
  if (expIntro) expIntro.textContent = langData[lang].expIntro;
  // Experience 1
  const exp1Time = document.querySelector(".exp-time-1");
  if (exp1Time) exp1Time.textContent = langData[lang].exp1Time;
  const exp1Job = document.querySelector(".exp-job-1");
  if (exp1Job) exp1Job.textContent = langData[lang].exp1Job;
  const exp1Desc1 = document.querySelector(".exp-desc-1-1");
  if (exp1Desc1) exp1Desc1.textContent = langData[lang].exp1Desc1;
  const exp1Desc2 = document.querySelector(".exp-desc-1-2");
  if (exp1Desc2) exp1Desc2.textContent = langData[lang].exp1Desc2;
  const exp1Desc3 = document.querySelector(".exp-desc-1-3");
  if (exp1Desc3) exp1Desc3.textContent = langData[lang].exp1Desc3;
  // Contact
  const contactTitle = document.querySelector(".contact-title");
  if (contactTitle) contactTitle.textContent = langData[lang].contactTitle;
  const contactDesc = document.querySelector(".contact-desc");
  if (contactDesc) contactDesc.textContent = langData[lang].contactDesc;
  const bookingBtn = document.querySelector(".booking-btn");
  if (bookingBtn) bookingBtn.textContent = langData[lang].bookingBtn;
  // Booking info (under form)
  const bookingMsg = document.querySelector(".booking-msg");
  if (bookingMsg) bookingMsg.innerHTML = langData[lang].bookingMsg;
  const bookingRedirect = document.querySelector(".booking-redirect");
  if (bookingRedirect)
    bookingRedirect.innerHTML = langData[lang].bookingRedirect;
  const bookingLink = document.querySelector(".booking-link");
  if (bookingLink) bookingLink.textContent = langData[lang].bookingLink;
}

document.addEventListener("DOMContentLoaded", () => {
  // --- LANGUAGE SWITCHER ---
  document.getElementById("langID").onclick = () => setLang("id");
  document.getElementById("langEN").onclick = () => setLang("en");
  setLang(localStorage.getItem("lang") || "id");

  // Dark/light mode toggle
  const modeToggle = document.getElementById("modeToggle");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  function setMode(mode) {
    document.body.classList.toggle("light", mode === "light");
    localStorage.setItem("colorMode", mode);
    if (modeToggle) modeToggle.textContent = mode === "light" ? "🌞" : "🌙";
  }
  if (modeToggle) {
    let mode =
      localStorage.getItem("colorMode") || (prefersDark ? "dark" : "light");
    setMode(mode);
    modeToggle.addEventListener("click", () => {
      mode = document.body.classList.contains("light") ? "dark" : "light";
      setMode(mode);
    });
  }

  // Reveal animation via IntersectionObserver
  const revealTargets = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealTargets.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );
    revealTargets.forEach((el) => io.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add("in"));
  }

  // Enable/disable booking button real-time
  const preForm = document.getElementById("preBookingForm");
  if (preForm) {
    const submitBtn = preForm.querySelector('button[type="submit"]');
    function checkFormValid() {
      const name = preForm.fullName.value.trim();
      const email = preForm.email.value.trim();
      const phone = preForm.phone.value.trim();
      const emailValid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
      const phoneValid = /^[0-9+ ]{8,20}$/.test(phone);
      if (name && email && phone && emailValid && phoneValid) {
        submitBtn.disabled = false;
      } else {
        submitBtn.disabled = true;
      }
    }
    preForm.addEventListener("input", checkFormValid);
    preForm.addEventListener("change", checkFormValid);
    checkFormValid();
  }

  // Tahun footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav
  const nav = document.getElementById("mainNav");
  const toggle = document.getElementById("navToggle");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      document.body.classList.toggle("nav-open");
    });
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        document.body.classList.remove("nav-open");
      })
    );
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const id = anchor.getAttribute("href");
      if (id && id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  // Project details toggles
  document.querySelectorAll('[data-toggle="details"]').forEach((btn) => {
    btn.addEventListener("click", () => {
      const details = btn.closest(".project-card").querySelector(".details");
      const hidden = details.hasAttribute("hidden");
      if (hidden) details.removeAttribute("hidden");
      else details.setAttribute("hidden", "");
      btn.textContent = hidden ? "Tutup" : "Detail";
    });
  });

  // Pre-booking form gating the calendar embed
  const bookingWrapper = document.getElementById("bookingWrapper");
  const calEmbed = document.getElementById("calEmbed");
  if (preForm && bookingWrapper && calEmbed) {
    preForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // Basic validation
      const formData = new FormData(preForm);
      let valid = true;
      preForm.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
      ["fullName", "email", "phone"].forEach((name) => {
        const input = preForm.querySelector(`[name="${name}"]`);
        if (!input) return;
        if (!input.value.trim()) {
          valid = false;
          setError(name, "Wajib diisi");
        } else if (
          name === "email" &&
          !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(input.value)
        ) {
          valid = false;
          setError(name, "Format email tidak valid");
        } else if (name === "phone" && !/^[0-9+ ]{8,20}$/.test(input.value)) {
          valid = false;
          setError(name, "Nomor tidak valid");
        }
      });
      if (!valid) return;

      const name = encodeURIComponent(formData.get("fullName"));
      const email = encodeURIComponent(formData.get("email"));
      const phone = encodeURIComponent(formData.get("phone"));
      const purpose = encodeURIComponent(formData.get("purpose") || "");

      // TODO: Ganti "your-username" & event-type sesuai Cal.com Anda
      // Referensi: https://docs.cal.com/reference/embed
      const calUsername = "your-username";
      const eventType = ""; // kosong = show all public event types. Atau isi ID event type.

      const base = `https://cal.com/${calUsername}${
        eventType ? "/" + eventType : ""
      }`;
      // Cal.com mendukung prefill name & email. Phone belum first-class; kita masukkan ke notes.
      const prefill = `?name=${name}&email=${email}&notes=${encodeURIComponent(
        "Phone: " + phone + (purpose ? "\nPurpose: " + purpose : "")
      )}`;

      calEmbed.src =
        base + prefill + "&hide_event_type_details=1&primary_color=4f8cff";

      bookingWrapper.hidden = false;
      bookingWrapper.scrollIntoView({ behavior: "smooth", block: "start" });
      preForm.querySelector('button[type="submit"]').disabled = true;
    });
  }

  function setError(name, msg) {
    const el = preForm.querySelector(`[data-error-for="${name}"]`);
    if (el) el.textContent = msg;
  }
});
