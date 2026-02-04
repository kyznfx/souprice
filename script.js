const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const crashBtn = document.getElementById("crashBtn");
const card = document.getElementById("card");

const errorSound = document.getElementById("errorSound");
const boopSound = document.getElementById("boopSound");

let noClicks = 0;

/* NO BUTTON TELEPORT */
noBtn.addEventListener("click", () => {
  noClicks++;

  errorSound.play();

  card.classList.add("shake");
  setTimeout(() => card.classList.remove("shake"), 400);

  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  if (noClicks >= 5) {
    noBtn.innerText = "JUST CLICK YES 😭";
  }
});

/* YES BUTTON (FINAL REWARD) */
yesBtn.addEventListener("click", () => {
  boopSound.play();
  card.innerHTML = `
    <h1>🎉 YOU'RE STUCK WITH ME 💍</h1>
    <p>No refunds. No returns. Lifetime warranty 😌</p>
  `;
});

/* FAKE CRASH BUTTON */
crashBtn.addEventListener("click", () => {
  const crash = document.getElementById("crashScreen");
  crash.style.display = "flex";

  setTimeout(() => {
    crash.innerHTML = "<h1>JK 😈</h1><p>You really clicked that?</p>";
  }, 1500);

  setTimeout(() => {
    crash.style.display = "none";
  }, 3000);
});
