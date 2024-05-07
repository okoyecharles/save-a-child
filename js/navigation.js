const mobileHamburgerButton = document.getElementById("hamburger");
const mobileHamburgerMenu = document.getElementById("nav-links");
mobileHamburgerMenu.dataset.menuOpen = "false";

mobileHamburgerButton.addEventListener("click", (event) => {
  let isMenuOpen = mobileHamburgerMenu.dataset.menuOpen;
  // toggle menu open state
  isMenuOpen = isMenuOpen === "false" ? true : false;

  mobileHamburgerButton.setAttribute("aria-expanded", isMenuOpen);
  mobileHamburgerButton.setAttribute(
    "aria-label",
    isMenuOpen ? "close main menu" : "open main menu"
  );
  mobileHamburgerMenu.dataset.menuOpen = isMenuOpen;
});

// meta tags ... linter errors ... design inspiration ... favicon