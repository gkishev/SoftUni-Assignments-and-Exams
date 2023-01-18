function amazingNumbers(number) {

    let numberToString = String(number);
    let sum = 0;

    for(let i = 0; i < numberToString.length; i++) {
        sum += Number(numberToString[i]);
    }
    let result = String(sum).includes("9");
    console.log(`${number} Amazing? ${result ? `True` : `False`}`)
    
}

amazingNumbers(1233);