function task4() {
  function formatString(string) {
    return string.length > 40 ? string.slice(0, 40) + "..." : string;
  }

  console.log(formatString("Curabitur ligula sapien, tincidunt non."));
  // вернется оригинальная строка

  console.log(
    formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
  );
  // вернется форматированная строка
}
