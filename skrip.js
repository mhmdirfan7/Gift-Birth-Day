let music = document.getElementById("bg-music");

function goPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page' + page).classList.add('active');

  if (page === 2) {
    startConfetti();
    playMusic(); // mulai musik otomatis
  } else {
    pauseMusic(); // stop musik kalau balik ke halaman 1
  }
}

function noClick() {
  let modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.background = "rgba(0,0,0,0.6)";
  modal.style.display = "flex";
  modal.style.alignItems = "center";
  modal.style.justifyContent = "center";
  modal.style.zIndex = "1000";

  modal.innerHTML = `
    <div style="background:white; padding:20px; border-radius:15px; text-align:center; max-width:300px;">
      <h3 style="margin-bottom:10px;">Waduh kok pencet No sih bro? 😭</h3>
      <img src="bro face.png" alt="bro face" style="width:200px; border-radius:10px; margin-bottom:10px;">
      <br>
      <button style="padding:8px 20px; border:none; border-radius:8px; background:#ff6b6b; color:white; cursor:pointer;">
        Oke, sorry bro 😂
      </button>
    </div>
  `;

  modal.querySelector("button").onclick = () => {
    document.body.removeChild(modal);
  };

  document.body.appendChild(modal);
}

// Confetti
function startConfetti() {
  let duration = 3 * 1000;
  let end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
}

// Musik
function playMusic() {
  music.play();
}
function pauseMusic() {
  music.pause();
}
function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
