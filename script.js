document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const music = document.getElementById("bgMusic");
  const card = document.querySelector(".card");
  const hearts = document.getElementById("hearts-layer");

  // Continuous floating hearts
  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 4 + Math.random() * 4 + "s";
    hearts.appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
  }, 400);

  // YES CLICK
  yesBtn.addEventListener("click", () => {
    music.volume = 0.6;
    music.play();

    card.innerHTML = `
      <h1>YAYYYY 💕💖</h1>
      <p>I knew it… I always knew 🥰</p>
      <p>Happy Valentine’s Day ❤️</p>
    `;

    for (let i = 0; i < 50; i++) {
      const heart = document.createElement("span");
      heart.innerHTML = "💖";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = 2 + Math.random() * 2 + "s";
      hearts.appendChild(heart);
      setTimeout(() => heart.remove(), 4000);
    }
  });

  // NO RUNS AWAY
  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });
});
