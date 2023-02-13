function firstAndLastKNumbers(arr) {

    
    let numberK = arr.shift(0);

    
        let firstK = arr.slice(0, numberK);
        let lastK = arr.slice(-numberK);
    

    console.log(firstK.join(" "))
    console.log(lastK.join(" "))
    
}

firstAndLastKNumbers([3, 6, 7, 8, 9]);