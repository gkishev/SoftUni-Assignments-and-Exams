function equalSums (arr) {

    let indexFound = "no";

    for(let i = 0; i < arr.length; i++) {
        let sumRight = 0;
        let sumLeft = 0;
        for(let l = 0; l < i; l++) {
            let currentElL = arr[l];
            sumLeft += currentElL;
        }
        for(let r = i + 1; r < arr.length; r++) {
            let currentElR = arr[r];
            sumRight += currentElR;
        }
        if(sumLeft === sumRight) {
            indexFound = i;
        }
    }
    console.log(indexFound);
}

equalSums([1, 2, 3, 3]);