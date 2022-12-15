function dateSum (num) {

    let numToString = String(num);
    let sum = 0;

    for (let i = 0; i < numToString.length; i++) {

        let currentChar = numToString[i];
        sum += Number(currentChar);

    }

    console.log(sum);
}

dateSum(245678);