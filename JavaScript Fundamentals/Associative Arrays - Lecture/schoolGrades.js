function schoolGrades(input) {
  let myMap = new Map();

  for (let line of input) {
    let data = line.split(' ');
    let name = data[0];
    let sumOfGrades = 0;
    let counter = 0;

    for (let i = 1; i < data.length; i++) {
      let currentGrade = data[i];
      sumOfGrades += Number(currentGrade);
      counter++;
    }

    if (myMap.has(name)) {
      let initialGrades = myMap.get(name);
      myMap.set(
        name,
        (Number(initialGrades) + Number(sumOfGrades) / counter) / 2
      );
    } else {
      myMap.set(name, Number(sumOfGrades) / counter);
    }
  }

  let sorted = Array.from(myMap.entries());
  sorted.sort((a, b) => a[0].localeCompare(b[0]));

  for (let [name, grade] of sorted) {
    console.log(`${name}: ${grade.toFixed(2)}`);
  }
}

schoolGrades(['Steven 3 5 6 4', 'George 4 6', 'Tammy 2 5 3', 'Steven 6 3']);
