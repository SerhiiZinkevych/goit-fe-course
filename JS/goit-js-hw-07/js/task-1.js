"use strict";

// В HTML есть список категорий ul#categories.

// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет
// в консоль текст заголовка элемента (тега h2) и количество элементов
// в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

const categoriesList = document.querySelector("#categories");
console.log(`В списке ${categoriesList.children.length} категории.`);

const items = document.querySelectorAll("#categories .item");

items.forEach(item => {
  const title = item.querySelector("h2");
  const elements = item.querySelectorAll("ul li");
  console.log(`Категория: ${title.textContent}`);
  console.log("Количество элементов: ", elements.length);
});
