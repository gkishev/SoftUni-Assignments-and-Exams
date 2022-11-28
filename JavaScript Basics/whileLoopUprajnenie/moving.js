function moving(input) {
  let width = Number(input[0]);
  let length = Number(input[1]);
  let higth = Number(input[2]);
  let freeArea = width * length * higth;
  let totalTakenArea = 0;
  let index = 3;
  let command = input[index];

  while (command !== 'Done') {
    let currentSize = Number(input[index]);
    totalTakenArea += currentSize;

    if (totalTakenArea > freeArea) {
      console.log(
        `No more free space! You need ${
          totalTakenArea - freeArea
        } Cubic meters more.`
      );
      break;
    }
    index++;
    command = input[index];
  }
  if (command === 'Done' && totalTakenArea < freeArea) {
    console.log(`${freeArea - totalTakenArea} Cubic meters left.`);
  }
}

moving(['10', '1', '2', '4', '6', 'Done']);
