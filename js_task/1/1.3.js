let name = prompt("Введите имя: ");
let age = prompt("Введите возраст: ");

if (age < 18) {
  console.log(`Привет, ${name}! Ты ещё школьник.`);
} else if (age <= 65) {
  console.log(`Привет, ${name}! Ты взрослый человек, заходи.`);
} else {
  console.log(`Привет, ${name}! Для возрастных лиц у нас скидки.`);
}
