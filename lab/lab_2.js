// 1
const existedUserLogin = "the_best_user"
const existedUserPassword = "12345678"

const userLogin = prompt("Введите логин").trim()
const userPassword = prompt("Введите пароль").trim()

if (userLogin === existedUserLogin && userPassword === existedUserPassword) {
    alert(`Добро пожаловать, ${userLogin}!`);
} else {
    alert("Логин и (или) Пароль введены неверно!")
}

// 2
let correctAnswers = 0;
let incorrectAnswers = 0;

const questions = [
    { q: "Сколько будет 2 + 2?", a: 4 },
    { q: "Сколько будет 2 * 2?", a: 4 },
    { q: "У Пети было 5 яблок. 3 он съел, 1 отдал другу. Сколько осталось?", a: 1 },
    { q: "У Маши было 10 конфет. 2 съела, 1 отдала. Мама дала еще 5. Сколько стало?", a: 12 },
    { q: "Сколько будет 2 + 2 * 2?", a: 6 }
];

for (let i = 0; i < questions.length; i++) {
    const userAnswer = Number(prompt(questions[i].q));
    
    if (userAnswer === questions[i].a) {
        alert("Ответ Верный");
        correctAnswers++;
    } else {
        alert("Ответ Неверный");
        incorrectAnswers++;
    }
}

alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`);

// 3
const q1 = confirm("JavaScript появился в 1995 году?");
alert(q1 ? "Верно" : "Неверно, JavaScript появился в 1995 году");

const q2 = confirm("Спецификация JavaScript называется ECMAScript?");
alert(q2 ? "Верно" : "Неверно, спецификация называется ECMAScript");

const q3 = confirm("JavaScript был создан за 1 месяц?");
alert(q3 ? "Неверно, он был создан за 10 дней" : "Верно (на самом деле за 10 дней)");

// 4 (while)
let i = 0;
while (i < 3) {
    let newStudent = prompt("Введите имя нового студента!");
    if (newStudent) {
        newStudent = newStudent.trim();
        alert(`Добро пожаловать, ${newStudent}!`);
    }
    i++;
}

// (do while)
let j = 0;
do {
    let newStudent = prompt("Введите имя нового студента!");
    if (newStudent) {
        newStudent = newStudent.trim();
        alert(`Добро пожаловать, ${newStudent}!`);
    }
    j++;
} while (j < 3);

// 5
let sum = 0; 
for (let i = 0; i <= 100; i++) { 
    sum += i;
}
alert(sum);

