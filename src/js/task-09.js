function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector(".change-color");
const colorResult = document.querySelector(".color");
colorResult.style.backgroundColor = button.addEventListener("click", getRandomHexColor);
