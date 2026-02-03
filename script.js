/* =========================
   CampusGuard JavaScript
========================= */

// Demo Red Alert button
function redAlert() {
  const confirmAlert = confirm(
    "🚨 Activate Red Alert?\n\nYour location will be shared with campus security (Demo mode)."
  );

  if (confirmAlert) {
    alert(
      "✅ Red Alert Activated!\n\nCampus security has received your location.\n(Demo only)"
    );
  }
}

// CTA Contact button message
const contactButtons = document.querySelectorAll(".cta button");

contactButtons.forEach(button => {
  button.addEventListener("click", () => {
    alert(
      "Thanks for reaching out to CampusGuard!\nWe’ll get back to you soon. (Demo)"
    );
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Fade-in animation when cards appear on screen
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.2 }
);

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "all 0.6s ease";
  observer.observe(card);
});

// Highlight website link on click
const websiteLink = document.querySelector("#link a");

if (websiteLink) {
  websiteLink.addEventListener("click", () => {
    console.log("CampusGuard website link clicked");
  });
}

function openWebsite() {
  const websiteURL = "https://campusguard-demo.netlify.app"; 
  // 🔁 Replace with your real website link

  const isAndroid = /Android/i.test(navigator.userAgent);

  if (isAndroid) {
    // Open in Chrome app on Android
    window.location.href =
      "intent://campusguard-demo.netlify.app" +
      "#Intent;" +
      "scheme=https;" +
      "package=com.android.chrome;" +
      "end;";
  } else {
    // Fallback for other devices (iPhone, laptop, etc.)
    window.open(websiteURL, "_blank");
  }
}