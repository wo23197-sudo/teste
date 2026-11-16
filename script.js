document.addEventListener("DOMContentLoaded", () => {
// 1. Mobile Menu Toggle
const btnMenu = document.querySelector(".botao-menu");
const navMenu = document.querySelector(".menu");

if (btnMenu && navMenu) {
btnMenu.addEventListener("click", () => {
const isExpanded = btnMenu.getAttribute("aria-expanded") === "true";
btnMenu.setAttribute("aria-expanded", !isExpanded);

  // Toggle visibility for mobile screens
  if (navMenu.style.display === "flex") {
    navMenu.style.display = "";
  } else {
    navMenu.style.display = "flex";
    navMenu.style.flexDirection = "column";
    navMenu.style.position = "absolute";
    navMenu.style.top = "100%";
    navMenu.style.left = "0";
    navMenu.style.right = "0";
    navMenu.style.backgroundColor = "#ffffff";
    navMenu.style.padding = "1rem 2rem";
    navMenu.style.boxShadow = "0 4px 6px -1px rgba(0,0,0,0.1)";
  }
});


}

// 2. Contact Form Handler
const formContato = document.getElementById("formulario");
const retornoMsg = document.getElementById("retorno");

if (formContato) {
formContato.addEventListener("submit", (event) => {
event.preventDefault();

  // Show loading feedback
  if (retornoMsg) {
    retornoMsg.style.color = "#0066ff";
    retornoMsg.textContent = "Enviando mensagem...";
  }

  // Simulate API submission delay
  setTimeout(() => {
    if (retornoMsg) {
      retornoMsg.style.color = "#10b981"; // Green success color
      retornoMsg.textContent = "Mensagem enviada com sucesso! Entraremos em contato em breve.";
    }
    formContato.reset();
  }, 1200);
});


}

// 3. Smooth Scroll for Navigation Links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => {
link.addEventListener("click", (e) => {
const targetId = link.getAttribute("href");
if (targetId && targetId !== "#") {
const targetElement = document.querySelector(targetId);
if (targetElement) {
e.preventDefault();
targetElement.scrollIntoView({
behavior: "smooth",
block: "start"
});

      // Close mobile menu if open
      if (window.innerWidth <= 768 && navMenu) {
        navMenu.style.display = "";
        btnMenu.setAttribute("aria-expanded", "false");
      }
    }
  }
});


});
});