const total = 100;
const ordered = 150;

if (ordered > total) {
  console.log("На складе недостаточно товаров!");
} else if (ordered === total) {
  console.log("Вы забираете весь товар cо склада!");
} else {
  console.log("Заказ оформлен, с вами свяжется менеджер");
}
