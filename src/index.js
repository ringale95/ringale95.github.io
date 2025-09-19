// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const savedTheme = localStorage.getItem("theme") || "light";
body.setAttribute("data-theme", savedTheme);
updateIcon(savedTheme);

themeToggle.addEventListener("click", () => {
  const current = body.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";
  body.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  updateIcon(next);
});

function updateIcon(theme) {
  const icon = themeToggle.querySelector("span");
  icon.className = theme === "dark" ? "fa-solid fa-moon" : "fa-solid fa-sun";
}

// Load experience from data.json
document.addEventListener("DOMContentLoaded", () => {
  fetch("data.json")
    .then((res) => res.json())
    .then((json) => {
      const container = document.getElementById("experience-container");
      json.experience.forEach((exp) => {
        const div = document.createElement("div");
        div.classList.add("experience-item");
        div.innerHTML = `
          <h3>${exp.company} | ${exp.role}</h3>
          <p><strong>${exp.date}</strong></p>
          <p>${exp.description}</p>
        `;
        container.appendChild(div);
      });
    });
});
