let input = Number(prompt("Введите число"));
let total = 0;
while (input) {
  total = total + input;
  input = Number(prompt("Введите число"));
}
console.log(total);
