function building(input) {

    let floorCount = Number(input[0]);
    let roomCount = Number(input[1]);

    for (let x = floorCount; x > 0; x--) {
        let buff = "";
        for (let y = 0; y < roomCount; y++) {
            if (x === floorCount) {
                buff += `L${x}${y} `
            } else if (x % 2 === 0) {
                buff += `O${x}${y} `
            } else {
                buff += `A${x}${y} `
            }
            
        }
        console.log(buff)
    }
    

}

building(["6",

"4"])