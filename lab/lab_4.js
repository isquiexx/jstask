// 1
const peopleWaiting = ["Кристина", "Олег", "Кирилл", "Мария", "Светлана", "Артем", "Глеб"];

function giveParcel(name) {
    const person = peopleWaiting.shift();
    alert(`${person} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`);
}

function leaveQueueWithoutParcel() {
    const person = peopleWaiting.pop();
    alert(`${person} не получил(а) посылку и ушел(ла) из очереди.`);
}

giveParcel(); 
giveParcel();
giveParcel();

while (peopleWaiting.length > 0) {
    leaveQueueWithoutParcel();
}

// 2
function getSumOfSequence(number) {
    const sequence = [];
    for (let i = 1; i <= number; i++) {
        sequence.push(i);
    }
    return sequence[0] + sequence[sequence.length - 1]; 
}

console.log(getSumOfSequence(5));

// 3
const coffees = ["Latte", "Cappuccino", "Americano"];
const coffeeName = prompt("Поиск кофе по названию")?.trim();

if (coffeeName) {
    const foundIndex = coffees.findIndex(coffee => 
        coffee.toLowerCase() === coffeeName.toLowerCase()
    );

    if (foundIndex !== -1) {
        const coffee = coffees[foundIndex];
        alert(`Держите ваш любимый кофе ${coffee}. Он ${foundIndex + 1}-й по популярности в нашей кофейне.`);
    } else {
        alert("К сожалению, такого вида кофе нет в наличии");
    }
}

// 4
const coffes = ["Latte", "Cappuccino", "Americano"];
const prices = [1.5, 1, 2];
const updatedPrices = prices.map(price => price + 0.5); 

coffes.forEach((name, index) => {
    alert(`Кофе ${name} сейчас стоит ${updatedPrices[index]} евро`);
});

// 5
const clientsEstimations = [];

function askClientToGiveEstimation() {
    const estimation = Number(prompt("Как вы оцениваете нашу кофейню от 1 до 10?"));
    if (estimation >= 1 && estimation <= 10) {
        clientsEstimations.push(estimation);
    }
}

for (let i = 0; i < 5; i++) {
    askClientToGiveEstimation();
}

const goodEstimations = clientsEstimations.filter(est => est > 5).length;
const notGoodEstimations = clientsEstimations.filter(est => est <= 5).length;

alert(`Всего положительных оценок: ${goodEstimations}; Всего отрицательных оценок: ${notGoodEstimations}`);

// 6
const numbers = [10, 4, 100, 5, 54, 2];

let sumFor = 0;
for (let i = 0; i < numbers.length; i++) {
    sumFor += Math.pow(numbers[i], 3);
}

let sumForOf = 0;
for (const num of numbers) {
    sumForOf += num ** 3;
}

let sumForEach = 0;
numbers.forEach(num => sumForEach += num ** 3);

const sumReduce = numbers.reduce((acc, num) => acc + (num ** 3), 0);


console.log(sumReduce);
