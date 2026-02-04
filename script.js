let yesStage = 0;
let countdownInterval = null;

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const card = document.getElementById("card");
const music = document.getElementById("bgMusic");

// 🔴 NO BUTTON TROLL (kept!)
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
  const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// 🟢 YES BUTTON LOGIC
yesBtn.addEventListener("click", () => {
  yesStage++;

  // 🟢 STAGE 1 — Countdown troll
  if (yesStage === 1) {
    let time = 5;
    title.textContent = "Confirming...";
    subtitle.textContent = time;

    countdownInterval = setInterval(() => {
      time--;
      subtitle.textContent = time;

      if (time === 0) {
        clearInterval(countdownInterval);
        title.textContent = "Too slow 😜";
        subtitle.textContent = "Try again";
      }
    }, 800);
  }

  // 🟡 STAGE 2 — Terms & Conditions
  else if (yesStage === 2) {
    clearInterval(countdownInterval);
    title.textContent = "Terms & Conditions 💌";
    subtitle.innerHTML = `
      ✔ Unlimited cuddles<br>
      ✔ Lifetime commitment<br>
      ✔ No refunds 😌
    `;
    yesBtn.textContent = "I Agree 💕";
    card.classList.add("shake");
  }

  // 🔴 STAGE 3 — FINAL CONFIRMATION
  else if (yesStage === 3) {
    card.classList.remove("shake");
    yesBtn.classList.add("shake", "glow");
    yesBtn.textContent = "FINAL CONFIRMATION";

    setTimeout(() => {
      title.textContent = "💍 YOU’RE STUCK WITH ME";
      subtitle.textContent = "No refunds. Lifetime subscription 😏";
      music.volume = 0.6;
      music.play();
      yesBtn.style.display = "none";
      noBtn.style.display = "none";
    }, 600);
  }
});
