function commonElements (firstArr, secondArr) {

    for(let el1 of firstArr) {
        for(let el2 of secondArr) {
            if (el1 === el2) {
                console.log(el1)
            }
        }

        
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],

['Petar', 10, 'hey', 4, 'hello', '2'])