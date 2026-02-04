document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const crashBtn = document.getElementById("crashBtn");

  const bgMusic = document.getElementById("bgMusic");
  const noSound = document.getElementById("noSound");

  const card = document.getElementById("card");

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

  /* CRASH BUTTON */
  crashBtn.addEventListener("click", () => {
    document.body.innerHTML = `
      <div style="
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        background:black;
        color:red;
        font-size:2rem;">
        💥 SYSTEM CRASH 💥<br>Just kidding 😈
      </div>
    `;

    setTimeout(() => location.reload(), 2000);
  });

  /* YES BUTTON — FINAL */
  yesBtn.addEventListener("click", () => {
    bgMusic.currentTime = 0;
    bgMusic.volume = 0.7;
    bgMusic.play();

    card.classList.add("final");
    card.innerHTML = `
      <h1>💍 YOU’RE STUCK WITH ME 💍</h1>
      <p>No refunds. Lifetime subscription 😌</p>
    `;
  });
});
