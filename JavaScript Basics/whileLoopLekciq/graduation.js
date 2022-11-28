function graduation(input) {
  let index = 0;
  let name = input[index];
  index++;

  let grade = 1;
  let sumGrade = 0;
  let failedYearCount = 0;
  let failedYear = false;

  while (grade <= 12) {
    let currentGrade = Number(input[index]);
    index++;
    if (currentGrade < 4.0) {
      failedYearCount++;
      if (failedYearCount == 2) {
        failedYear = true;
        break;
      }
      continue;
    }
    sumGrade += currentGrade;
    grade++;
  }
  let finalGrade = sumGrade / 12;
  if (failedYear) {
    console.log(`${name} has been excluded at ${grade} grade`);
  } else {
    console.log(`${name} graduated. Average grade: ${finalGrade.toFixed(2)}`);
  }
}

graduation([
  'Gosho',
  '5',
  '5.5',
  '6',
  '5.43',
  '5.5',
  '6',
  '5.55',
  '5',
  '6',
  '6',
  '5.43',
  '5',
]);
