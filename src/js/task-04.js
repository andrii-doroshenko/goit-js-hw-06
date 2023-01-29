/*Счетчик состоит из спана и кнопок, которые, при клике,
должны увеличивать и уменьшать его значение на единицу.*/

const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const valueResult = document.querySelector("#value");

let counterValue = 0;

btnDecrement.addEventListener("click", onDecrement);

function onDecrement(event) {
  counterValue -= 1;
  valueResult.textContent = counterValue;
}
btnIncrement.addEventListener("click", onIncrement);

function onIncrement(event) {
  counterValue += 1;
  valueResult.textContent = counterValue;
}
