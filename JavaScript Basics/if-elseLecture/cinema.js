function cinema (input) {

    let price = 0;
    let dayOfTheWeek = input[0];

    if (dayOfTheWeek == "Monday" || dayOfTheWeek == "Tuesday" ||
     dayOfTheWeek == "Friday") {
        price = 12;
        console.log(price);
    } else if (dayOfTheWeek == "Wednesday" || dayOfTheWeek == "Thursday") {
        price = 14;
        console.log(price);
    } else if (dayOfTheWeek == "Saturday" || dayOfTheWeek == "Sunday") {
        price = 16;
        console.log(price);
    }


}

cinema(["Sunday"]);