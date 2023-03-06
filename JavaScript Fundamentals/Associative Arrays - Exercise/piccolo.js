function piccolo (data) {

    let mySet = new Set();

    for (let line of data) {
        let [action, carNumber] = line.split(", ");
        if(action === "IN") {
            mySet.add(carNumber);
        } else {
            mySet.delete(carNumber);
        }
    }
    
    let sortedArray = Array.from(mySet).sort((a, b) => a.localeCompare(b));
    
    if(sortedArray.length === 0) {
        console.log(`Parking Lot is Empty`)
    } else {
        for (let line of sortedArray) {
            console.log(`${line}`)
        }
    }
}


piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);