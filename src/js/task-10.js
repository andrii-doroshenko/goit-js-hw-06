function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  quantityEl: document.querySelector('#controls>input[type="number"]'),
  btnCreateEl: document.querySelector("[data-create]"),
  btnRemoveEl: document.querySelector("[data-destroy]"),
  outputEl: document.querySelector("#boxes"),
};

refs.btnCreateEl.addEventListener("click", createBoxes);

function createBoxes(amount) {
  amount = refs.quantityEl.value;
  const boxesArr = [];

  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement("div");

    boxEl.style.width = 30 + i * 10 + "px";
    boxEl.style.height = 30 + i * 10 + "px";
    boxEl.style.backgroundColor = getRandomHexColor();

    boxesArr.push(boxEl);
    refs.outputEl.append(...boxesArr);
  }
}

const destroyBoxes = (event) => (refs.outputEl.innerHTML = "");

refs.btnRemoveEl.addEventListener("click", destroyBoxes);
