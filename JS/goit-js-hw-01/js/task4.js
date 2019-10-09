"use strict";

function task4() {
  let credits = 23580;

  const pricePerDroid = 3000;

  let quantity = prompt("Введите к-во дроидов для покупки:");

  if (quantity) {
    quantity = Number(quantity);
    if (quantity) {
      const totalPrice = quantity * pricePerDroid;
      if (totalPrice > credits) {
        console.log("Недостаточно средств на счету!");
      } else {
        credits = credits - totalPrice;
        console.log(
          `Вы купили ${quantity} дроидов, на счету осталось ${credits} кредитов.`
        );
      }
    } else {
      console.log("Необходимо ввести число!");
    }
  } else if (quantity === "") {
    console.log("Необходимо ввести число!");
  } else {
    console.log("Отменено пользователем!");
  }
}
