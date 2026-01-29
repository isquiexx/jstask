// 1 function declaration
function getName1(name) {
  return `Имя равно ${name}`;
}

// function expression
const getName2 = function(name) {
  return `Имя равно ${name}`;
};

// cтрелочная функция
const getName3 = (name) => {
  return `Имя равно ${name}`;
};

console.log(getName1('имя1'));
console.log(getName2('имя2'));
console.log(getName3('имя3'));

// 2
const getSumOfNumbers = (number, type = 'odd') => {
  let sum = 0;
  
  for (let i = 0; i <= number; i++) {
    if (type === 'odd') {
      if (i % 2 !== 0) sum += i;
    } else if (type === 'even') {
      if (i % 2 === 0) sum += i;
    } else if (type === '') {
      sum += i;
    }
  }
  
  return sum;
};

console.log(getSumOfNumbers(15, 'odd'));
console.log(getSumOfNumbers(15, 'even'));
console.log(getSumOfNumbers(15, ''));

// 3
function getDivisorsCount(number = 1) {
  if (!Number.isInteger(number) || number < 0) {
    alert("number должен быть целым числом и больше нуля!");
    return;
  }

  let count = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      count++;
    }
  }
  
  return count;
}

console.log(getDivisorsCount(4));
console.log(getDivisorsCount(5));
console.log(getDivisorsCount(12));