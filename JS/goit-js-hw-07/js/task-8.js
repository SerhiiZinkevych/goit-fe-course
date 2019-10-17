"use strict";

// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const input = document.querySelector('#controls > input[type="number"]');
const boxes = document.querySelector("#boxes");
const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');

renderBtn.addEventListener("click", renderBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function renderBoxes() {
  destroyBoxes();
  const markup = createBoxes(Number(input.value));
  boxes.append(...markup);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomRGB() {
  return Math.floor(Math.random() * 255);
}

function createBoxes(amount) {
  let size = 30;
  let randomBoxes = [];

  for (let i = 0; i < amount; i += 1) {
    let el = document.createElement("div");
    el.style.width = size + "px";
    el.style.height = size + "px";
    el.style.backgroundColor = `rgb(${getRandomRGB()},${getRandomRGB()},${getRandomRGB()})`;
    randomBoxes.push(el);
    size += 10;
  }
  return randomBoxes;
}
