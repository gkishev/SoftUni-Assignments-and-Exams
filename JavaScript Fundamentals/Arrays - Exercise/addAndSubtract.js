function addAndSubstract(arr) {
  let newArr = [];
  let sumOldArr = 0;
  let sumNewArr = 0;

  for (let currentIndex = 0; currentIndex < arr.length; currentIndex++) {
    let indexNumber = Number(arr[currentIndex]);
    if (arr[currentIndex] % 2 === 0) {
      indexNumber += currentIndex;
      newArr.push(indexNumber);
    } else {
      indexNumber -= currentIndex;
      newArr.push(indexNumber);
    }
  }
  for (let num of arr) {
    sumOldArr += num;
  }
  for (let num of newArr) {
    sumNewArr += num;
  }

  console.log(newArr);
  console.log(sumOldArr);
  console.log(sumNewArr);
}

addAndSubstract([5, 15, 23, 56, 35]);
