// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("span");
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem("theme") || "light";
body.setAttribute("data-theme", savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
  if (theme === "dark") {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  } else {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  }
}

// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = menuToggle.querySelector("span");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");

  if (mobileMenu.classList.contains("active")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
  } else {
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  }
});

// Close mobile menu when clicking a link
const mobileLinks = document.querySelectorAll(
  ".mobile-menu-links .navbar-link",
);
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  });
});
