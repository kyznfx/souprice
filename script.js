document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const bgMusic = document.getElementById("bgMusic");

  let musicStarted = false;

  // 🔑 Start background music on FIRST interaction
  document.addEventListener("click", () => {
    if (!musicStarted) {
      bgMusic.volume = 0.6;
      bgMusic.play().catch(() => {});
      musicStarted = true;
    }
  }, { once: true });

  // 💖 YES BUTTON — KEEP MUSIC, NO OTHER SOUND
  yesBtn.addEventListener("click", () => {
    bgMusic.volume = 0.8; // boost romance 😏

    document.querySelector(".container").innerHTML = `
      <h1>🎉 YOU’RE STUCK WITH ME 💍</h1>
      <p>No refunds. Lifetime subscription 😌</p>
    `;
  });

  // 😈 NO BUTTON — troll only (NO SOUND)
  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });
});
