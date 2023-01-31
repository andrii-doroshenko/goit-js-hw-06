/*Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
и изменяет инлайн-стиль span#text обновляя свойство font-size.
В результате при перетаскивании ползунка будет меняться размер текста.*/

const refs = {
  rangeEl: document.querySelector("#font-size-control"),
  outputFontEl: document.querySelector("#text"),
};

refs.rangeEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  refs.outputFontEl.style.fontSize = `${event.currentTarget.value}px`;
}