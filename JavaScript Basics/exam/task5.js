function everest (input) {

    let index = 0;
    let command = input[index];
    let startingAltitude = 5364;
    let daysClimbing = 1;
    let totalAltitude = 0;

    while(command !== `END`) {
        index++;
        let currentClimbedMeters = Number(input[index]);
        
        if (command === `Yes`) {
            daysClimbing++;
            startingAltitude += currentClimbedMeters;
        } else if (command === `No`) {
            startingAltitude += currentClimbedMeters;
        }
        if (startingAltitude >= 8848) {
            console.log(`Goal reached for ${daysClimbing} days!`)
            break;

        }
        if (daysClimbing >= 5) {
            console.log(`Failed!`)
            console.log(`${startingAltitude}`)
            break;
        }
        index++;
        command = input[index];


    }
    if (command === `END`) {
        console.log(`Failed!`)
        console.log(`${startingAltitude}`)

    }

}

everest (["Yes",
"535",
"Yes",
"849",
"Yes",
"499",
"Yes",
"400",
"Yes",
"500"])

;