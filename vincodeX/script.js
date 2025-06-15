// Show welcome alert
alert("Welcome to VincodeX");

// Toggle navigation menu links on small screens
document.getElementById("menu-toggle").addEventListener("click", function (e) {
   e.stopPropagation(); // Prevent the outside click from triggering immediately
  document.getElementById("nav-links").classList.toggle("active");
});

document.addEventListener("click", function (event) {
  const menu = document.getElementById("nav-links");
  const toggle = document.getElementById("menu-toggle");

  // If the menu is open and the click is outside both menu and toggle button
  if (
    menu.classList.contains("active") &&
    !menu.contains(event.target) &&
    !toggle.contains(event.target)
  ) {
    menu.classList.remove("active");
  }
});

  document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-bar");
    const suggestionsBox = document.getElementById("search-suggestions");
     // Map: text => id of section
    const services = [
      { name: "Web Development", id: "web-development" },
      { name: "Python Solutions", id: "python-solutions" },
      { name: "Mobile App Design", id: "mobile-app-design" },
      { name: "Tech Support", id: "tech-support" },
      { name: "Online Unit Registration", id: "unit-registration" }
    ];
    if (!searchInput) {
      console.warn("Search bar not found");
      return;
    }

     searchInput.addEventListener("input", function () {
      const query = this.value.toLowerCase();
      suggestionsBox.innerHTML = ""; // Clear previous

      if (query === "") {
        return;
      }

      const matches = services.filter(service =>
        service.name.toLowerCase().includes(query)
      );

      matches.forEach(match => {
        const div = document.createElement("div");
        div.textContent = match.name;
        div.addEventListener("click", () => {
          document.getElementById(match.id)?.scrollIntoView({ behavior: "smooth" });
          suggestionsBox.innerHTML = "";
          searchInput.value = ""; // Optionally clear input
        });
        suggestionsBox.appendChild(div);
      });
    });

    // Optional: hide suggestions if clicked outside
    document.addEventListener("click", (e) => {
      if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
        suggestionsBox.innerHTML = "";
      }
    });
  });