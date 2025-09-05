document.getElementById("theme-switcher").addEventListener("click", () => {
  const icon = document.getElementById("theme-icon");
  icon.classList.add("hidden");
  setTimeout(() => {
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
    icon.classList.remove("hidden");

    const root = document.documentElement;
    if (icon.classList.contains("fa-sun")) {
      root.style.setProperty("--bg-color", "white");
      root.style.setProperty("--primary-color", "#003366");
      root.style.setProperty("--text-color", "#000000");
      root.style.setProperty("--title-color", "#003366");
      root.style.setProperty("--hero-image-filter", "none");
    } else {
      root.style.setProperty("--bg-color", "#000e1aff");
      root.style.setProperty("--primary-color", "#000e1aff");
      root.style.setProperty("--text-color", "#FFFFFF");
      root.style.setProperty("--title-color", "#FFFFFF");
      root.style.setProperty("--hero-image-filter", "grayscale(100%)");
    }
  }, 200);
});
