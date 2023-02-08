function palindromeIntegers(input) {

    for (let i = 0; i < input.length;i++) {
        let numToString = String(input[i]);
        let buff = "";
        for(let j = numToString.length - 1; j >= 0; j--) {
         buff += numToString[j];
        }
        console.log(numToString === buff)
    }

}

palindromeIntegers([123,323,421,121]);