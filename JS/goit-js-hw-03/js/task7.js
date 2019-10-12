"use strict";
/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw"
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод отвечающий за добавление суммы к балансу
   * Создает объект транзакции и вызывает addTransaction
   */
  deposit(amount) {
    this.balance += amount;
    const transaction = {
      id: this.transactions.length + 1,
      type: Transaction.DEPOSIT,
      amount: amount
    };

    this.addTransaction(transaction);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Создает объект транзакции и вызывает addTransaction
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (this.balance < amount) {
      console.log(
        `Снятие ${amount} не возможно! Недостаточно средств! Баланс - ${this.balance}`
      );
    } else {
      this.balance -= amount;
      const transaction = {
        id: this.transactions.length + 1,
        type: Transaction.WITHDRAW,
        amount: amount
      };
      this.addTransaction(transaction);
    }
  },

  /*
   * Метод добавляющий транзацию в свойство transactions
   * Принимает объект трназкции
   */
  addTransaction(transaction) {
    this.transactions.push(transaction);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (let transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return total;
  }
};

console.log("Баланс до депозита: ", account.getBalance());

account.deposit(200);

console.log("Баланс после депозита (200): ", account.getBalance());

account.withdraw(50);

console.log("Баланс после снятия (50): ", account.getBalance());

account.deposit(150);

console.log("Баланс после депозита (150): ", account.getBalance());

console.log("Попытка снять больше чем есть на счете... (550)");

account.withdraw(550);

console.log(
  "Баланс после попытки снятия больше чем есть на счете: ",
  account.getBalance()
);

account.withdraw(300);

console.log("Баланс после снятия (300): ", account.getBalance());

console.log("Детали транзакции с ID=2: ", account.getTransactionDetails(2));

console.log(
  "Сумма по депозитам из всей истории транзакций: ",
  account.getTransactionTotal(Transaction.DEPOSIT)
);

console.log(
  "Сумма по снятиям из всей истории транзакций: ",
  account.getTransactionTotal(Transaction.WITHDRAW)
);

console.log(account.transactions);
