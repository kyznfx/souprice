const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const crashBtn = document.getElementById("crashBtn");
const bgMusic = document.getElementById("bgMusic");
const noSound = document.getElementById("noSound");

const card = document.getElementById("card");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const effects = document.getElementById("effects");

let yesStage = 0;
let countdown;

/* NO BUTTON */
noBtn.addEventListener("click", () => {
  noSound.currentTime = 0;
  noSound.play();

  card.classList.add("shake");
  setTimeout(() => card.classList.remove("shake"), 300);

  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "vw";
  noBtn.style.top = Math.random() * 80 + "vh";
});

/* YES BUTTON — 3 STAGES */
yesBtn.addEventListener("click", () => {
  yesStage++;

  /* STAGE 1 — COUNTDOWN */
  if (yesStage === 1) {
    let time = 5;
    document.body.classList.add("pulse-red");
    title.textContent = "DECISION LOCKING IN… ⏳";
    subtitle.textContent = time;

    countdown = setInterval(() => {
      time--;
      subtitle.textContent = time;

      if (time === 1) {
        clearInterval(countdown);
        document.body.classList.remove("pulse-red");
        title.textContent = "Too slow 😜";
        subtitle.textContent = "Try again";
      }
    }, 1000);
  }

  /* STAGE 2 — TERMS */
  else if (yesStage === 2) {
    clearInterval(countdown);
    card.innerHTML = `
      <h1>Terms & Conditions 💌</h1>
      <ul style="text-align:left;margin:20px auto;max-width:280px;">
        <li>✔ Unlimited cuddles</li>
        <li>✔ Lifetime commitment</li>
        <li>✔ No refunds 😌</li>
      </ul>
      <button id="agreeBtn">I Agree 💕</button>
    `;
    document.getElementById("agreeBtn").onclick = () => yesBtn.click();
  }

  /* STAGE 3 — FINAL */
  else if (yesStage === 3) {
    bgMusic.volume = 0.7;
    bgMusic.play();

    card.classList.add("final-glow");
    card.innerHTML = `
      <h1>💍 YOU’RE STUCK WITH ME 💍</h1>
      <p>Happy Valentine’s Day ❤️</p>
    `;

    for (let i = 0; i < 80; i++) {
      const s = document.createElement("span");
      s.textContent = Math.random() > 0.5 ? "💖" : "❤️";
      s.style.left = Math.random() * 100 + "vw";
      effects.appendChild(s);
      setTimeout(() => s.remove(), 3000);
    }
  }
});

/* CRASH BUTTON */
crashBtn.addEventListener("click", () => {
  const crash = document.getElementById("crashScreen");
  crash.style.display = "flex";
  setTimeout(() => crash.style.display = "none", 2500);
});
