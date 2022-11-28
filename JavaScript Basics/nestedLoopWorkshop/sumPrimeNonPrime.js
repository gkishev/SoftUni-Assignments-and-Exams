function sumPrimeNonPrime (input) {

    let index = 0;
    let command = Number(input[index]);

    let sumPrimeNumbers = 0;
    let sumNonPrime = 0;

    let counter = 0;
    

    let start = -214748364;
    let end = 214748364;

    while (command !== `stop`) {
        let currentNumber = Number(command);
        if (currentNumber < 0) {
            console.log(`Number is negative.`)
            index++;
            currentNumber = Number(input[index]);
            continue;
        }
        for (let i = 1; i <= currentNumber; i++) {
            if (currentNumber % i === 0) {
                counter++;
            }
            
        }
        if (currentNumber === 1) {
            sumNonPrime += currentNumber;
        }
        if (counter === 2) {
            sumPrimeNumbers += currentNumber;
        } else if ( counter > 2) {
            sumNonPrime += currentNumber;
        }
        counter = 0;
        index++;
        command = input[index];

    }
   

   
    console.log(`Sum of all prime numbers is: ${sumPrimeNumbers}`)
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`)

}

sumPrimeNonPrime(["3",

"9",

"0",

"7",

"19",

"4",

"stop"]);