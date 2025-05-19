let canvas = document.getElementById('instrumentCanvas');
let ctx = canvas.getContext('2d');
let currentAudio;

fetch('data/instruments.json')
  .then(res => res.json())
  .then(data => {
    const menu = document.getElementById('instrumentMenu');

    data.instruments.forEach(instrument => {
      let btn = document.createElement('button');
      btn.textContent = instrument.title;
      btn.onclick = () => showInstrument(instrument);
      menu.appendChild(btn);
    });
  });

function showInstrument(instrument) {
  let img = new Image();
  img.onload = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 50, 20, 400, 250);
    ctx.font = '20px Arial';
    ctx.fillText(instrument.title, 20, 290);
    ctx.fillText(instrument.description, 20, 320);
  };
  img.src = instrument.image;

  if (currentAudio) currentAudio.pause();
  currentAudio = new Audio(instrument.audio);
  currentAudio.play();
}

// PWA install prompt
let deferredPrompt;
const installBtn = document.getElementById('installBtn');
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.style.display = 'inline';
});

installBtn.addEventListener('click', () => {
  deferredPrompt.prompt();
});
