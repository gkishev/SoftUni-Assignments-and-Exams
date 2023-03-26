function race(data) {
  let participants = {};
  let partArr = data.shift().split(', ');
  let namePattern = /[A-Za-z]/g;
  let distancePattern = /[0-9]/g;

  for (let participant of partArr) {
    participants[participant] = 0;
  }

  for (let line of data) {
    if (line === 'end of race') {
      break;
    }
    let name = line.match(namePattern).join('');
    let distance = line.match(distancePattern);
    let tempDistance = 0;
    debugger;
    for (let num of distance) {
      tempDistance += Number(num);
    }
    if (participants.hasOwnProperty(name)) {
      participants[name] += tempDistance;
    }
  }
  let sortArr = Object.entries(participants).sort((a, b)=> b[1] - a[1]);
  console.log(`1st place: ${sortArr[0][0]}`)
  console.log(`2nd place: ${sortArr[1][0]}`)
  console.log(`3rd place: ${sortArr[2][0]}`)
}

race([
  'George, Peter, Bill, Tom',
  'G4e@55or%6g6!68e!!@ ',
  'R1@!3a$y4456@',
  'B5@i@#123ll',
  'G@e54o$r6ge#',
  '7P%et^#e5346r',
  'T$o553m&6',
  'end of race',
]);
