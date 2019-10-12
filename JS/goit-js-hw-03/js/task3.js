"use strict";

function findBestEmployee(employees) {
  let max = Object.entries(employees)[0];
  for (let employee of Object.entries(employees)) {
    max = employee[1] > max[1] ? employee : max;
  }
  return max[0];
}

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
); // lux
