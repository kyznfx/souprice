document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const crashBtn = document.getElementById("crashBtn");

  const bgMusic = document.getElementById("bgMusic");
  const noSound = document.getElementById("noSound");

  const card = document.getElementById("card");
  const question = document.getElementById("question");
  const subtext = document.getElementById("subtext");

  /* YES — SIMPLE & SMOOTH */
  yesBtn.addEventListener("click", () => {
    bgMusic.volume = 0.6;
    bgMusic.play();

    card.classList.add("shake");
    setTimeout(() => card.classList.remove("shake"), 300);

    question.textContent = "💍 YOU’RE STUCK WITH ME 💍";
    subtext.textContent = "No refunds. Lifetime subscription 😌";

    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    crashBtn.style.display = "none";
  });

  /* NO — TELEPORT + SOUND */
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

  /* 💥 FAKE CRASH BUTTON */
  crashBtn.addEventListener("click", () => {
    noSound.currentTime = 0;
    noSound.play();

    document.body.innerHTML = `
      <div style="
        background:black;
        color:#00ff00;
        height:100vh;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:2rem;
        font-family:monospace;
      ">
        SYSTEM ERROR 💥<br>Just kidding 😜
      </div>
    `;

    setTimeout(() => location.reload(), 1500);
  });
});
