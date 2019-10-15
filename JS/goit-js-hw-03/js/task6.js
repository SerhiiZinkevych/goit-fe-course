"use strict";

function calculateTotalPrice(arr, productName) {
  // let res = 0;
  // for (let el of arr) {
  //   if (el["name"] === productName) {
  //     res += el["price"] * el["quantity"];
  //   }
  // }
  // return res;
  return arr
    .filter(el => el.name === productName)
    .reduce((accumulator, el) => accumulator + el.price * el.quantity, 0);
}

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Захват", price: 1200, quantity: 2 }
];

console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Дроид")); // 2800
