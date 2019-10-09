"use strict";

let credits = 23580;

const pricePerDroid = 3000;

const qty = Number(prompt("Введите к-во дроидов для покупки:"));

if (qty) {
  const totalPrice = qty * pricePerDroid;
  if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
  } else {
    credits = credits - totalPrice;
    console.log(
      `Вы купили ${qty} дроидов, на счету осталось ${credits} кредитов.`
    );
  }
} else {
  console.log("Отменено пользователем!");
}
