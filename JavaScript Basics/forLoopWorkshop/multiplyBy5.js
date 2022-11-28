function multiplyWith5 (input) {

    let number = Number(input[0]);

    for (i = 1; i <= 10; i++) {

        let result = i * number;
        console.log(`${i} * ${number} = ${result}`);
    }

}

multiplyWith5(["5"])