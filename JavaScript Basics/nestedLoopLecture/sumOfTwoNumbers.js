function sumOfTwoNumbers(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);
  let magicNumber = Number(input[2]);

  let combination = 0;
  let isFound = false;

  for (let i = start; i <= end; i++) {
    for (let y = start; y <= end; y++) {
      let res = i + y;
      combination++;

      if (res === magicNumber) {
        isFound = true;
        console.log(
          `Combination N:${combination} (${i} + ${y} = ${magicNumber})`
        );
        break;
      }
    }
    if (isFound) {
        break;
    }
  }
  if (!isFound) {
    console.log(`${combination} combinations - neither equals ${magicNumber}`);
  }
}

sumOfTwoNumbers(['23', '24', '20']);
