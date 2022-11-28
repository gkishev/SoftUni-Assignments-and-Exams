function sumOfDigits (input) {

    let word = input[0];
    let sum = 0;
    

    for (let i = 0; i < word.length ; i++) {

        let currentDigit = Number(word.charAt(i));
        sum += currentDigit;
        
    }
    console.log(`The sum of the digits is:${sum}`);



}

sumOfDigits(["1234"]);