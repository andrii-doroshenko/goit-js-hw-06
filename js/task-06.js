/*Напиши скрипт, который при потере фокуса на инпуте (событие blur), 
проверяет его содержимое на правильное количество введённых символов. */

const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputChange);

function onInputChange() {
  const maxInputLength = Number(inputEl.getAttribute('data-length'));
  if (inputEl.value.length !== maxInputLength) {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  } else {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  }
}
