function oddAndEvenSum(input) {

    let sumEven = 0;
    let sumOdd = 0;

    let numToString = String(input)
    for(let i = 0; i < numToString.length; i++) {
        let currentChar = Number(numToString[i]);
        if (currentChar % 2 === 0) {
            sumEven += currentChar;
        } else {
            sumOdd += currentChar;
        }
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
    
    
}


oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234)