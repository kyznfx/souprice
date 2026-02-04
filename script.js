document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const music = document.getElementById("bgMusic");
  const container = document.querySelector(".container");

  let yesClicks = 0;

  // NO button chaos
  noBtn.addEventListener("mouseenter", () => {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    noBtn.innerText = ["NO 😭", "TRY AGAIN 😜", "MISS 😈", "LOL NOPE"][Math.floor(Math.random()*4)];
  });

  // YES button troll → reward
  yesBtn.addEventListener("click", () => {
    yesClicks++;

    if (yesClicks === 1) {
      yesBtn.innerText = "ARE YOU SURE? 🤨";
      shake(container);
    } 
    else if (yesClicks === 2) {
      yesBtn.innerText = "LAST CHANCE 😏";
      container.style.transform = "rotate(2deg)";
    } 
    else if (yesClicks === 3) {
      startFinale();
    }
  });

  function shake(el) {
    el.style.animation = "shake 0.4s";
    setTimeout(() => el.style.animation = "", 400);
  }

  function startFinale() {
    music.volume = 0.7;
    music.play();

    container.innerHTML = `
      <h1 class="big-text">YOU'RE STUCK WITH ME NOW 💍</h1>
      <p>Happy Valentine's Day 💖</p>
    `;

    document.body.classList.add("pulse-bg");
    launchConfetti();
    heartRain();
  }

  // CONFETTI
  function launchConfetti() {
    for (let i = 0; i < 120; i++) {
      const conf = document.createElement("div");
      conf.className = "confetti";
      conf.style.left = Math.random() * 100 + "vw";
      conf.style.animationDelay = Math.random() * 2 + "s";
      document.body.appendChild(conf);
      setTimeout(() => conf.remove(), 5000);
    }
  }

  // HEART RAIN
  function heartRain() {
    setInterval(() => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.innerText = "❤️";
      heart.style.left = Math.random() * 100 + "vw";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 4000);
    }, 200);
  }
});
