function perfectNumber(num) {
  let perfectDeviderSum = 0;

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      perfectDeviderSum += i;
    }
  }
  if (num === perfectDeviderSum) {
    console.log('We have a perfect number!');
  } else {
    console.log("It's not so perfect.");
  }
}

perfectNumber(1236498);
