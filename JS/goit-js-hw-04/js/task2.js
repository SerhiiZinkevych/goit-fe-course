"use strict";

const inventory = {
  items: ["Монорельса", "Фильтр"],
  add(itemName) {
    this.items.push(itemName);
  },
  remove(itemName) {
    this.items = this.items.filter(item => item !== itemName);
  }
};

const invokeInventoryAction = (itemName, action) => action(itemName);

invokeInventoryAction("Аптечка", inventory.add.bind(inventory));
// Invoking add opeartion on Аптечка

console.log(inventory.items); // ['Монорельса', 'Фильтр', 'Аптечка']

invokeInventoryAction("Фильтр", inventory.remove.bind(inventory));
//Invoking remove opeartion on Фильтр

console.log(inventory.items); // ['Монорельса', 'Аптечка']
