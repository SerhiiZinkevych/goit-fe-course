function task6() {
  let input = "";
  const numbers = [];
  let total = 0;

  while (input === "") {
    input = prompt("Введите число");
  }

  while (input) {
    input = Number(input);
    if (input) {
      numbers.push(input);
    } else {
      alert("Было введено не число, попробуйте еще раз!");
    }
    input = prompt("Введите число");
  }

  if (numbers.length > 0) {
    for (let value of numbers) {
      total = total + value;
    }
    console.log("Общая сумма чисел равна " + total);
  }
}
