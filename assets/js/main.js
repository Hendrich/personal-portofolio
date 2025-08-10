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
    expTitle:
      "Ringkasan perjalanan profesional saya di bidang Quality Assurance.",
    contactTitle: "Contact Me",
    contactDesc:
      "Ingin diskusi atau konsultasi 1:1? Silakan isi nomor ponsel Anda terlebih dahulu untuk membuka jadwal booking.",
    bookingBtn: "Lanjutkan ke Booking",
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
    expTitle: "My professional journey in Quality Assurance.",
    contactTitle: "Contact Me",
    contactDesc:
      "Want to discuss or consult 1:1? Please enter your phone number first to open the booking schedule.",
    bookingBtn: "Continue to Booking",
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
  // Experience
  const expTitle = document.querySelector(".exp-title");
  if (expTitle) expTitle.textContent = langData[lang].expTitle;
  // Contact
  const contactTitle = document.querySelector(".contact-title");
  if (contactTitle) contactTitle.textContent = langData[lang].contactTitle;
  const contactDesc = document.querySelector(".contact-desc");
  if (contactDesc) contactDesc.textContent = langData[lang].contactDesc;
  const bookingBtn = document.querySelector(".booking-btn");
  if (bookingBtn) bookingBtn.textContent = langData[lang].bookingBtn;
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
