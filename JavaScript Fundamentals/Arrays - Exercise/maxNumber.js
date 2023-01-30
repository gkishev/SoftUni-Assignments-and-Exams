function maxNumber (arr) {

    let maxNum = [];

    for (let i = 0; i < arr.length; i++) {
        let number1 = arr[i];
        let isLargest = true;
        for(let j = i + 1; j < arr.length; j++) {
            let number2 = arr[j];
            if (number1 <= number2) {
                isLargest = false;

            }
        }
        if (isLargest) {
            maxNum.push(number1)
        }

    }
    console.log(maxNum.join(" "))
}

maxNumber([1, 4, 3, 2])