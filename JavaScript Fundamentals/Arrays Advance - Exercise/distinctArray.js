function distinctArray(input) {

    let clearedArray = [];

    for(let el of input) {
        if (clearedArray.indexOf(el) === -1) {
            clearedArray.push(el)
        }
    }
    console.log(clearedArray.join(" "))
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])