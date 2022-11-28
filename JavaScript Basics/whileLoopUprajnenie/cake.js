function cake(input) {
  let length = Number(input[0]);
  let width = Number(input[1]);
  let cakeSize = length * width;
  let index = 2;
  let sumTaken = 0;
  let command = input[index];

  while (command !== 'STOP') {
    let piecesTaken = Number(input[index]);
    sumTaken += piecesTaken;

    if (sumTaken >= cakeSize) {
      console.log(
        `No more cake left! You need ${sumTaken - cakeSize} pieces more.`
      );
      break;
    }
    index++;
    command = input[index];
  }
  if (command === 'STOP' && cakeSize > sumTaken) {
    console.log(`${cakeSize - sumTaken} pieces are left.`);
  }
}

cake(['10', '2', '2', '4', '6', 'STOP']);
