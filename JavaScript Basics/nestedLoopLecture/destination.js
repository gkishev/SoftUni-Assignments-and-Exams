function destination (input) {

    let index = 0;
    let command = input[index];
    index++;
    
    while (command !== "End") {
        let place = command;
        let neededSum = Number(input[index]);
        index++;
        let sum = 0;
        while (sum < neededSum) {
            let currentMoneySaved = Number(input[index]);
            sum += currentMoneySaved;
            index++;
        }
        command = input[index];
        index++;
        if (sum >= neededSum) {
            console.log(`Going to ${place}!`)
        }
    }
   
    

}

destination(["Greece",

"1000",

"200",

"200",

"300",

"100",

"150",

"240",

"Spain",

"1200",

"300",

"500",

"193",

"423",

"End"]);