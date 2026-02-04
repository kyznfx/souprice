// ===== YES BUTTON MULTI-STAGE LOGIC =====
let yesStage = 0;
let countdownInterval = null;

yesBtn.addEventListener("click", () => {
  yesStage++;

  // ---------- STAGE 1: COUNTDOWN TROLL ----------
  if (yesStage === 1) {
    let count = 5;
    const title = document.getElementById("question");
    const sub = document.getElementById("subtext");

    document.body.classList.add("pulse-red");
    title.textContent = "DECISION LOCKING IN… ⏳";
    sub.textContent = `Time left: ${count}`;

    countdownInterval = setInterval(() => {
      count--;
      sub.textContent = `Time left: ${count}`;

      if (count === 1) {
        clearInterval(countdownInterval);
        document.body.classList.remove("pulse-red");
        title.textContent = "Too slow 😜";
        sub.textContent = "Try again";
      }
    }, 1000);
  }

  // ---------- STAGE 2: TERMS & CONDITIONS ----------
  else if (yesStage === 2) {
    clearInterval(countdownInterval);

    document.getElementById("card").innerHTML = `
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

  // ---------- STAGE 3: FINAL CONFIRMATION ----------
  else if (yesStage === 3) {
    const card = document.getElementById("card");

    // MUSIC STARTS HERE ONLY
    bgMusic.volume = 0.7;
    bgMusic.play();

    card.classList.add("final-glow");
    card.innerHTML = `
      <h1>💍 YOU’RE STUCK WITH ME 💍</h1>
      <p>No refunds. Lifetime subscription 😌</p>
    `;
  }
});
