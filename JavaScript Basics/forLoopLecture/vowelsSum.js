function vowolsSum (input) {

 
    let word = input[0];
    let totalVowelValue = 0;

    for (let i = 0; i < word.length ; i++) {

        switch(word.charAt(i)) {
            case "a":
                totalVowelValue += 1;
                break;
            case "e":
                totalVowelValue += 2;
                break;
            case "i":
                totalVowelValue += 3;
                break;
            case "o":
                totalVowelValue += 4;
                break;
            case "u":
                totalVowelValue += 5;
                break;
        }

        
    }
    console.log(totalVowelValue);
    
}

vowolsSum(["hello"]);