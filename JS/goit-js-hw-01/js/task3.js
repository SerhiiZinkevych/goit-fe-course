"use strict";

function task3() {
  const ADMIN_PASSWORD = "jqueryismyjam";
  const passwordFromUser = prompt("Введите пароль доступа:");
  let message;

  if (passwordFromUser) {
    if (passwordFromUser === ADMIN_PASSWORD) {
      message = "Добро пожаловать!";
    } else {
      message = "Доступ запрещен, неверный пароль!";
    }
  } else {
    message = "Отменено пользователем!";
  }

  alert(message);
}
