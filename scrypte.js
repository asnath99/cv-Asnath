// Mode sombre / clair
const btn = document.getElementById("themeBtn");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    btn.textContent = "☀️ Mode clair";
  } else {
    btn.textContent = "🌙 Mode sombre";
  }
});

// Formulaire
const form = document.getElementById("contactForm");
const msg = document.getElementById("msg"); // Assure-toi d’avoir <p id="msg"></p> dans ton HTML

form.addEventListener("submit", (e) => {
  e.preventDefault();
  msg.textContent = "Message envoyé avec succès ✅";
  form.reset();
});