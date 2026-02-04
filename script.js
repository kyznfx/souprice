document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const bgMusic = document.getElementById("bgMusic");
  const noSound = document.getElementById("noSound");

  const card = document.getElementById("card");
  const question = document.getElementById("question");
  const subtext = document.getElementById("subtext");

  let yesStage = 0;
  let countdownInterval = null;

  /* NO BUTTON TROLL */
  noBtn.addEventListener("click", () => {
    noSound.currentTime = 0;
    noSound.play();

    card.classList.add("shake");
    setTimeout(() => card.classList.remove("shake"), 300);

    const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });

  /* YES BUTTON — 3 STAGES */
  yesBtn.addEventListener("click", () => {
    yesStage++;

    /* STAGE 1 — COUNTDOWN TROLL */
    if (yesStage === 1) {
      let count = 5;
      document.body.classList.add("pulse-red");
      question.textContent = "DECISION LOCKING IN… ⏳";
      subtext.textContent = `Time left: ${count}`;

      countdownInterval = setInterval(() => {
        count--;
        subtext.textContent = `Time left: ${count}`;

        if (count === 1) {
          clearInterval(countdownInterval);
          document.body.classList.remove("pulse-red");
          question.textContent = "Too slow 😜";
          subtext.textContent = "Try again";
        }
      }, 1000);
    }

    /* STAGE 2 — TERMS */
    else if (yesStage === 2) {
      clearInterval(countdownInterval);

      card.innerHTML = `
        <h1>Terms & Conditions 💌</h1>
        <ul style="text-align:left; margin:20px auto; max-width:300px;">
          <li>✔ Unlimited cuddles</li>
          <li>✔ Lifetime commitment</li>
          <li>✔ No refunds 😌</li>
        </ul>
        <button id="agreeBtn">I Agree 💕</button>
      `;

      document.getElementById("agreeBtn").onclick = () => {
        yesStage++;
        yesBtn.click();
      };
    }

    /* STAGE 3 — FINAL CONFIRMATION */
    else if (yesStage === 3) {
      bgMusic.volume = 0.7;
      bgMusic.play();

      card.classList.add("final-glow");
      card.innerHTML = `
        <h1>💍 YOU’RE STUCK WITH ME 💍</h1>
        <p>No refunds. Lifetime subscription 😌</p>
      `;
    }
  });
});
