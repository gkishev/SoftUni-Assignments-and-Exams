function workingHours (input) {

    let h = Number(input[0]);
    let day = input[1];

    if ((h >= 10 && h <= 18)) {
        if (day == "Monday" || day == "Tuesday" || day == "Wednesday" ||
        day == "Thursday" || day == "Friday" || day == "Saturday") {
            console.log("open");
        } else {
            console.log("closed");
        }
    } else {
        console.log("closed");
    }


}

workingHours(["11", "Sunday"]);