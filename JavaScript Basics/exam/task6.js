function pincode(input) {
  let firstNumberB = Number(input[0]);
  let secondNumberB = Number(input[1]);
  let thirdNumberB = Number(input[2]);

  

  for (let i = 1; i <= firstNumberB; i++) {
    for (let l = 1; l <= secondNumberB; l++) {
      for (let m = 1; m <= thirdNumberB; m++) {
        if (
          (i % 2 === 0 && m % 2 === 0 && l === 2 ||
          i % 2 === 0 && m % 2 === 0 && l === 3 ||
          i % 2 === 0 && m % 2 === 0 && l === 5 ||
          i % 2 === 0 && m % 2 === 0 && l === 7)
        ) {
          console.log(`${i} ${l} ${m}`);
        }
      }
    }
  }
}

pincode(["3",
"5",
"5"])
;
