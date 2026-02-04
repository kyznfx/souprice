document.addEventListener("DOMContentLoaded", () => {

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const music = document.getElementById("bgMusic");
  const content = document.getElementById("content");

  // YES BUTTON
  yesBtn.addEventListener("click", () => {
    music.volume = 0.6;
    music.play();

    content.innerHTML = `
      <div class="container">
        <h1>YAYYYY 💘💘💘</h1>
        <p>I knew you'd say yes 😉</p>
        <p>Happy Valentine's Day ❤️</p>
      </div>
    `;
  });

  // NO BUTTON RUNS AWAY
  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const y = Math.random() * (window.innerHeight - noBtn.clientHeight);

    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  });

});
