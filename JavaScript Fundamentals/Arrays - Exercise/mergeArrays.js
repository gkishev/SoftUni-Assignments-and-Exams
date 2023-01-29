function mergeArrays (firstArr, secondArr) {

    let resultArr = [];

    for(let i = 0; i < firstArr.length; i++) {
        let currentEl = firstArr[i];
        if (i % 2 === 0) {
            resultArr.push(Number(firstArr[i]) + Number(secondArr[i]))

        } else {
            resultArr.push(firstArr[i] + secondArr[i])
        }
    }
    console.log(resultArr.join(" - "));



}

mergeArrays(['5', '15', '23', '56', '35'],

['17', '22', '87', '36', '11'])