function numbersBy9 (input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let sum = 0;
    let output = ``;

    for (let index = start; index <= end; index++) {

        if (index % 9 === 0) {
            sum += index;
            output += (index + "\n");
            
         }
         

        }
    console.log(`The sum: ${sum}`);
    console.log(output);
    


}

numbersBy9(["100", "200"]);