function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector(".change-color");

btnEl.addEventListener("click", onBtnColorChange);

function onBtnColorChange(event) {
  const outputEl = document.querySelector(".color");
  const bodyEl = document.querySelector("body");

  outputEl.textContent = getRandomHexColor();

  bodyEl.style.backgroundColor = outputEl.textContent;
}
