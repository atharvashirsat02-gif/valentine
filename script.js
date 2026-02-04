const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const msg = document.getElementById("msg");
const hearts = document.querySelector(".hearts");
const music = document.getElementById("music");

/* NO button movement */
function moveNo() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

/* YES click */
yesBtn.addEventListener("click", () => {
  msg.innerHTML = `
    <strong>Congratulations 🥹💖</strong><br><br>
    This moment just became a beautiful memory ✨<br><br>
    You are my today, tomorrow, and my forever 💕<br>
    Thank you for being my love and my best friend 🐱💗<br><br>
    I love you endlessly ♾️💞
  `;

  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  setTimeout(() => {
    msg.classList.add("show");
  }, 100);

  music.play();
});

/* Cute floating hearts */
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = Math.random() > 0.5 ? "💖" : "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 4) + "s";
  hearts.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}, 300);
