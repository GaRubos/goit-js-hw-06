function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector("button");
const paragrafText = document.querySelector(".color");
const body = document.body;

button.addEventListener("click", function () {
  paragrafText.textContent = getRandomHexColor();
  body.style.backgroundColor = paragrafText.textContent;
});
