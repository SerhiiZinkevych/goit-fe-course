"use strict";

// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
// и изменяет инлайн-стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

range.setAttribute("min", 10);
range.setAttribute("max", 200);

range.addEventListener("input", changeFontSize);

function changeFontSize(e) {
  text.style.fontSize = e.currentTarget.value + "px";
}
