function roundedNumbers(number, precission) {

    if(precission > 15) {
        precission = 15
    }
    
    let roundedNumber = number.toFixed(precission);

    console.log(parseFloat(roundedNumber))
}

roundedNumbers(10.5,3);