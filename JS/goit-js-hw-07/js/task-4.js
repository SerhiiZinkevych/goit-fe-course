"use strict";

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;

document
  .querySelector('button[data-action="increment"]')
  .addEventListener("click", increment);

document
  .querySelector('button[data-action="decrement"]')
  .addEventListener("click", decrement);

const counterElement = document.querySelector("#value");

function increment() {
  counterValue += 1;
  counterElement.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  counterElement.textContent = counterValue;
}
