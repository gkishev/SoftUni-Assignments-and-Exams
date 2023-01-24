function condenseNumbers(numbers) {
  let condensed = [];

  for (let elem of numbers) {
    condensed.push(elem);
  }

  while (condensed.length > 1) {
    let tempArr = [];
    for (let i = 0; i < condensed.length - 1; i++) {
      tempArr[i] = condensed[i] + condensed[i + 1];
    }

    condensed = tempArr;
  }
  console.log(condensed.join());
}

condenseNumbers([5, 0, 4, 1, 2]);
