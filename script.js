document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const music = document.getElementById("bgMusic");
  const container = document.querySelector(".container");
  const heartField = document.querySelector(".floating-hearts");

  // Floating hearts generator
  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 4 + Math.random() * 4 + "s";
    heartField.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
  }, 400);

  // YES button
  yesBtn.addEventListener("click", () => {
    music.volume = 0.6;
    music.play();

    container.innerHTML = `
      <h1>YAYYYYY 💕💘</h1>
      <p>I knew it… I always knew 🥰</p>
      <p>Happy Valentine’s Day ❤️</p>
    `;

    for (let i = 0; i < 40; i++) {
      const heart = document.createElement("span");
      heart.innerHTML = "💖";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = 2 + Math.random() * 2 + "s";
      heartField.appendChild(heart);

      setTimeout(() => heart.remove(), 4000);
    }
  });

  // NO button runs away
  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });
});
