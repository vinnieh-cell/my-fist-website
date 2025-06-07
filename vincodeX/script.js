// Show welcome alert
alert("Welcome to VincodeX");

// Toggle navigation menu links on small screens
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("active");
});

// Search bar functionality (works only if .service elements are present)
document.getElementById("search-bar").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const services = document.querySelectorAll(".service");

  services.forEach((service) => {
    const text = service.textContent.toLowerCase();
    if (text.includes(query)) {
      service.style.display = "block";
    } else {
      service.style.display = "none";
    }
  });
});

// You can add form submission JS here if needed