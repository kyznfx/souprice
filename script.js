document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const fakeBtn = document.getElementById("fakeBtn");
  const bgMusic = document.getElementById("bgMusic");
  const noSound = document.getElementById("noSound");
  const card = document.getElementById("card");

  // ✅ YES — ONLY PLAYS YOUR MP3
  yesBtn.addEventListener("click", () => {
    bgMusic.volume = 0.7;
    bgMusic.play();

    card.innerHTML = `
      <h1>🎉 YOU’RE STUCK WITH ME 💍</h1>
      <p>No refunds. Lifetime subscription 😌</p>
    `;
  });

  // ❌ NO — troll only
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

  // 💻 Fake crash prank
  fakeBtn.addEventListener("click", () => {
    document.body.innerHTML = `
      <h1 style="color:white;text-align:center;margin-top:40vh;">
        💀 SYSTEM ERROR 💀<br>
        Just kidding 😜
      </h1>
    `;
    setTimeout(() => location.reload(), 1800);
  });
});
