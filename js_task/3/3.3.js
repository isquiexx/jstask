for (let i = 1; i <= 10; i++) {
  for (let ii = 1; ii <= 10; ii++) {
    if (i === 5 || ii === 5) {
      continue;
    }
    console.log(`${i} × ${ii} = ${i * ii}`);
  }
}
