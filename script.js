const phrases = [
  "build clean interfaces?",
  "debug messy code?",
  "learn fast?",
  "turn ideas into projects?",
  "make tools people actually use?"
];

const rotatingText = document.getElementById("rotating-text");

let phraseIndex = 0;

function changePhrase() {
  rotatingText.classList.add("is-changing");

  setTimeout(() => {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    rotatingText.textContent = phrases[phraseIndex];
    rotatingText.classList.remove("is-changing");
  }, 260);
}

if (rotatingText) {
  setInterval(changePhrase, 2600);
}
