function sumFirstandLast(arr) {

    let firstNumber = arr.shift();
    let lastNumber = arr.pop();

    console.log(Number(firstNumber) + Number(lastNumber))

}

sumFirstandLast(['20', '30', '40'])