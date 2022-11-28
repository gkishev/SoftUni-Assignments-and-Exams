function trainTheTrainers(input) {
  let judgesCount = Number(input[0]);
  let index = 1;
  let command = input[index];
  let totalAvarage = 0;
  let counter = 0;

  while (command !== 'Finish') {
    counter++;

    let name = command;
    let tempSumGrade = 0;
    for (let j = 1; j <= judgesCount; j++) {
      index++;
      let currentGrade = Number(input[index]);

      tempSumGrade += currentGrade;
    }
    let tempAvgGrade = tempSumGrade / judgesCount;
    totalAvarage += tempAvgGrade;
    console.log(`${name} - ${tempAvgGrade.toFixed(2)}.`);
    index++;
    command = input[index];
  }
  if (command === 'Finish') {
    let avgGrade = totalAvarage / counter;
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);
  }
}

trainTheTrainers([
  '2',
  'While-Loop',
  '6.00',
  '5.50',
  'For-Loop',
  '5.84',
  '5.66',
  'Finish',
]);
