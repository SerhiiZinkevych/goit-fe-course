function task1() {
  function logItems(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(i + 1 + " - " + array[i]);
    }
  }

  logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
}
