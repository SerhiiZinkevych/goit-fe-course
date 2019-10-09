"use strict";

function task6() {
  let input = "";
  let total = 0;

  while (input === "") {
    input = prompt("Введите число");
  }

  while (input) {
    input = Number(input);
    if (input) {
      total = total + input;
    } else {
      alert("Было введено не число, попробуйте еще раз");
    }
    input = prompt("Введите число");
  }
  alert("Общая сумма чисел равна: " + total);
}
