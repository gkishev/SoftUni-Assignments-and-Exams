function processOddNumbers(arr) {

    let arrOddNum = arr.filter((el, i) => i % 2 === 1)
    let arrDoubledAndReverse = arrOddNum.map(x => x * 2)
    console.log(arrDoubledAndReverse.reverse().join(" "))
}

processOddNumbers([3, 0, 10, 4, 7, 3])