function colorieCalculator (arr) {

    let listOfFoods = {};

    for(let i = 0; i < arr.length; i++) {
        let currentInput = arr[i];
        let caloories = arr[i + 1]
        if(i % 2 === 0) {
            listOfFoods[currentInput] = caloories;
        } 
    }

    console.log(listOfFoods)
}

colorieCalculator(['Yoghurt', '48', 'Rise', '138',

'Apple', '52']);