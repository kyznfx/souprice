document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const music = document.getElementById("bgMusic");
  const question = document.getElementById("question");
  const subtext = document.getElementById("subtext");

  let escapeCount = 0;

  yesBtn.addEventListener("click", () => {
    music.volume = 0.6;
    music.play();

    document.querySelector(".container").innerHTML = `
      <h1 class="glow">YAYYYY 💕💖</h1>
      <p>I knew you’d say yes 😘</p>
      <p>You’re officially my Valentine ❤️</p>
    `;
  });

  noBtn.addEventListener("mouseover", () => {
    escapeCount++;

    const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const y = Math.random() * (window.innerHeight - noBtn.clientHeight);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    if (escapeCount === 3) {
      subtext.textContent = "Why are you running? 😭";
    }
    if (escapeCount === 6) {
      subtext.textContent = "Okay this is getting suspicious 😤";
    }
    if (escapeCount >= 9) {
      noBtn.style.display = "none";
      subtext.textContent = "No option removed. Problem solved 😌";
    }
  });
});
