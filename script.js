const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const fakeCrash = document.getElementById("fakeCrash");
const card = document.getElementById("card");

const boop = document.getElementById("boop");
const error = document.getElementById("error");

let noCount = 0;

/* NO BUTTON ROULETTE */
noBtn.addEventListener("click", () => {
  noCount++;
  error.play();

  card.classList.add("shake");
  setTimeout(() => card.classList.remove("shake"), 400);

  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  if (noCount > 4) {
    noBtn.innerText = "JUST SAY YES 😭";
  }
});

/* YES TROLL → REWARD */
yesBtn.addEventListener("click", () => {
  boop.play();
  card.innerHTML = `
    <h1>🎉 YOU’RE STUCK WITH ME 💍</h1>
    <p>No refunds. Lifetime subscription 😌</p>
  `;
});

/* FAKE CRASH */
fakeCrash.addEventListener("click", () => {
  const crash = document.getElementById("crashScreen");
  crash.style.display = "flex";

  setTimeout(() => {
    crash.innerHTML = "<h1>JK 😈</h1><p>You really clicked that?</p>";
  }, 1500);

  setTimeout(() => {
    crash.style.display = "none";
  }, 3000);

  document.addEventListener("click", () => {
  if (!musicStarted && bgMusic) {
    bgMusic.volume = 0.6;
    bgMusic.play().catch(() => {});
    musicStarted = true;
  }
}, { once: true });

});

