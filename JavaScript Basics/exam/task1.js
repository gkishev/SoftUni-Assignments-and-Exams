function catFood (input) {

    let percentFats = Number(input[0]);
    let percentProtein = Number(input[1]);
    let percentCarbs = Number(input[2]);
    let foodTotalCalories = Number(input[3]);
    let percentWater = Number(input[4]);


    let fatsInGrams = (foodTotalCalories * (percentFats / 100)) / 9;
    let proteinInGrams = (foodTotalCalories * (percentProtein / 100)) / 4;
    let carbsInGrams = (foodTotalCalories * (percentCarbs / 100)) / 4;

    let foodTotalInGrams = fatsInGrams + proteinInGrams + carbsInGrams;
    let caloriesPerGramOfFood = foodTotalCalories / foodTotalInGrams;

    let caloriesWithoutWater = (caloriesPerGramOfFood * (1 - (percentWater / 100))).toFixed(4)

    console.log(caloriesWithoutWater);

    

}

catFood (["40",
"40",
"20",
"3000",
"40"])
