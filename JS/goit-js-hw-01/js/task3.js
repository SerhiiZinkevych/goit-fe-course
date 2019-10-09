const correctPassword = "jqueryismyjam";
const password = prompt("Введите пароль доступа:");
if (password) {
  if (password === correctPassword) {
    alert("Доступ в секретный бункер разрешен!");
  } else {
    alert("Неверный пароль, активирована система защиты!");
  }
} else {
  alert("Была нажата отмена!");
}
