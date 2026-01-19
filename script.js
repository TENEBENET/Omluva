const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = "#0f0";
  ctx.font = fontSize + "px monospace";
  
  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
  }
}

setInterval(drawMatrix, 50);

const text = `Omlouvám se, Elindo…
občas zapomenu brzdit a jedu na plný výkon 👹
ale jestli existuje něco, co mě umí vypnout i zapnout jedním pohledem, jsi to ty ❤️
Jsi můj nebezpečně návykový glitch v Matrixu.`;

const container = document.getElementById("matrix-text");
let index = 0;

function typeText() {
  if (index < text.length) {
    const char = text.charAt(index);
    if (char === "❤️") {
      container.innerHTML += `<span class="heart">❤️</span>`;
      index += 2;
    } else {
      container.innerHTML += char;
      index++;
    }
    setTimeout(typeText, 60);
  } else {
    container.parentElement.classList.add("glow");
  }
}

setTimeout(() => {
  container.parentElement.style.opacity = 1;
  typeText();
}, 3000);
