let N = Number(prompt("Введите число: "));

let sum = 0;

for (let i = 1; i <= N; i++) {
  if (i % 2 === 0) {
    sum += i;
  } else {
    continue;
  }
}

console.log(sum);
