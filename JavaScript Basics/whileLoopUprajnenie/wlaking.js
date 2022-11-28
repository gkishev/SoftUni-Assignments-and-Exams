function steps(input) {
  let targetSteps = 10000;
  let index = 0;
  let sum = 0;
  let command = input[index];

  while (command !== 'Going home') {
    let currentSteps = Number(input[index]);
    sum += currentSteps;

    if (sum >= targetSteps) {
      let diff = sum - targetSteps;
      console.log(`Goal reached! Good job!`);
      console.log(`${diff} steps over the goal!`);
      break;
    }
    index++;
    command = input[index];
  }
  if (command === 'Going home') {
    command = Number(input[index + 1]);
    let stepsToHome = command;
    sum += stepsToHome;
    if (sum > targetSteps) {
      let diff = sum - targetSteps;
      console.log(`Goal reached! Good job!`);
      console.log(`${diff} steps over the goal!`);
    } else if (sum < targetSteps) {
      let diff = targetSteps - sum;
      console.log(`${diff} more steps to reach goal.`);
    }
  }
}

steps(['1500', '300', '2500', '3000', 'Going home', '200']);
