// Navbar solid ao rolar
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});
 
// Menu hambúrguer
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("active");
});
 
// Dark mode
const darkToggle = document.getElementById("darkToggle");
if (localStorage.getItem("darkMode") === "enabled") document.body.classList.add("dark-mode");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
});
 
// Voltar ao topo
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTop.addEventListener("click", () => window.scrollTo({top:0,behavior:"smooth"}));
 
// Contadores animados
const counters = document.querySelectorAll(".counter");
let started = false;
window.addEventListener("scroll", () => {
  const section = document.querySelector("#vantagens");
  const sectionTop = section.offsetTop - window.innerHeight + 100;
  if (!started && window.scrollY > sectionTop) {
    counters.forEach(counter => {
      const update = () => {
        const target = +counter.dataset.target;
        const count = +counter.innerText;
        const increment = Math.ceil(target / 100);
        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(update, 20);
        } else {
          counter.innerText = target;
        }
      };
      update();
    });
    started = true;
  }
});
 
// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) el.classList.add("active");
  });
});
 
// Formulário
document.getElementById("contatoForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Mensagem enviada com sucesso!");
  e.target.reset();
});
 