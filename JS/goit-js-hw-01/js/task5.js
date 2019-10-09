"use strict";

function task5() {
  const country = prompt("Введите название страны: ");
  let price;

  if (country) {
    switch (country.toUpperCase()) {
      case "КИТАЙ":
        price = 100;
        break;
      case "ЧИЛИ":
        price = 250;
        break;
      case "АВСТРАЛИЯ":
        price = 170;
        break;
      case "ИНДИЯ":
        price = 80;
        break;
      case "ЯМАЙКА":
        price = 120;
        break;
      default:
        alert("В вашей стране доставка не доступна");
    }
    if (price) {
      console.log(
        `Доставка в ${country.toUpperCase()} будет стоить ${price} кредитов`
      );
    }
  } else if (country === "") {
    console.log("Необходимо ввести название страны!");
  } else {
    console.log("Отменено пользователем!");
  }
}
