function grandpaStavri (input) {

    let days = Number(input[0]);
    
    let totalRakia = 0;
    let totalGrad = 0;

    for (index = 1; index <= input.length - 1; index+=2) {
        let currentRakia = Number(input[index]);
        let currentGrad = Number(input[index + 1]);
        
        
        let currentTotalGrad = currentRakia * currentGrad;
        totalRakia += currentRakia;
        totalGrad += currentTotalGrad;
        


    }

    let avarageGrad = totalGrad / totalRakia;
    console.log(`Liter: ${(totalRakia).toFixed(2)}`)
    console.log(`Degrees: ${(avarageGrad).toFixed(2)}`)
    if (avarageGrad < 38) {
        console.log(`Not good, you should baking!`)

    } else if (avarageGrad >=38 && avarageGrad <= 42) {
        console.log(`Super!`)
    } else if (avarageGrad > 42) {
        console.log(`Dilution with distilled water!`)
    }
    

}

grandpaStavri (["3",
"100",
"45",
"50",
"55",
"150",
"36"])
;