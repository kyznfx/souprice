const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const music = document.getElementById("bgMusic");
const card = document.getElementById("card");
const confetti = document.getElementById("confetti");

let noCount = 0;

/* ---------- NO BUTTON TROLL ---------- */
noBtn.addEventListener("click", () => {
  noCount++;

  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  if (noCount === 3) {
    noBtn.textContent = "STOP 😭";
  }
  if (noCount === 6) {
    noBtn.textContent = "WHY U LIKE THIS 😭";
  }
  if (noCount === 9) {
    noBtn.remove();
  }
});

/* ---------- YES BUTTON TROLL + REWARD ---------- */
yesBtn.addEventListener("click", () => {
  music.volume = 0.7;
  music.play();

  // fake delay troll
  card.innerHTML = `
    <h1>Processing answer… ⏳</h1>
    <p>Verifying feelings…</p>
  `;

  setTimeout(() => {
    explodeHearts();
    card.innerHTML = `
      <h1>You’re stuck with me now 💍</h1>
      <p>Happy Valentine’s Day ❤️</p>
    `;
  }, 2200);
});

/* ---------- CONFETTI + HEART RAIN ---------- */
function explodeHearts() {
  for (let i = 0; i < 80; i++) {
    const span = document.createElement("span");
    span.textContent = Math.random() > 0.5 ? "❤️" : "💖";
    span.style.left = Math.random() * 100 + "vw";
    span.style.animationDuration = 2 + Math.random() * 3 + "s";
    confetti.appendChild(span);

    setTimeout(() => span.remove(), 5000);
  }
}
