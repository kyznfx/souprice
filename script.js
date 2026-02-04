document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const music = document.getElementById("bgMusic");
  const container = document.querySelector(".container");

  let noCount = 0;

  const noMessages = [
    "Hey 😠 that tickles",
    "Wrong choice babe 😤",
    "Try again 😏",
    "NO is not an option 😌",
    "You’re testing me 😑",
    "Seriously?? 😭",
    "Last warning 😈",
    "Okay you asked for this 💀"
  ];

  // YES BUTTON — BIG PAYOFF
  yesBtn.addEventListener("click", () => {
    music.volume = 0.6;
    music.play();

    container.innerHTML = `
      <h1>YAYYYY 💖💖💖</h1>
      <p>I knew it 😌</p>
      <p>You’re officially my Valentine 💕</p>
      <div class="hearts"></div>
    `;

    startHeartRain();
  });

  // NO BUTTON — FUNNY CHAOS
  noBtn.addEventListener("click", () => {
    noCount++;

    // Move button randomly
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // Change text
    noBtn.textContent = noMessages[noCount % noMessages.length];

    // Shrink NO, grow YES
    noBtn.style.transform = `scale(${Math.max(0.6, 1 - noCount * 0.08)})`;
    yesBtn.style.transform = `scale(${1 + noCount * 0.15})`;

    // Ultimate troll
    if (noCount >= 7) {
      noBtn.style.display = "none";
      yesBtn.textContent = "OKAY FINE YES 💖";
    }
  });

  // HEART RAIN
  function startHeartRain() {
    for (let i = 0; i < 40; i++) {
      const heart = document.createElement("div");
      heart.className = "floating-heart";
      heart.textContent = "💖";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = 2 + Math.random() * 3 + "s";
      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 5000);
    }
  }
});
