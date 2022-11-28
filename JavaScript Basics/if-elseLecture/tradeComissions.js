function tradeCommissions (input) {

    let town = input[0];
    let sale = Number(input[1]);
    let percent = 0;

    if (town == "Sofia") {
        if (sale >= 0 && sale <= 500) {
            percent = 0.05;
            commission = sale * percent;
            console.log(commission.toFixed(2));
        } else if (sale > 500 && sale <= 1000) {
            percent = 0.07;
            commission = sale * percent;
            console.log(commission.toFixed(2));
    } else if (sale > 1000 && sale <= 10000) {
        percent = 0.08;
        commission = sale * percent;
        console.log(commission.toFixed(2));
    } else if (sale > 10000) {
        percent = 0.12;
        commission = sale * percent;
        console.log(commission.toFixed(2));
    } else {
        console.log("error");
    } 
} else if (town == "Varna") {
    if (sale >= 0 && sale <= 500) {
        percent = 0.045;
        commission = sale * percent;
        console.log(commission.toFixed(2));
    } else if (sale > 500 && sale <= 1000) {
        percent = 0.075;
        commission = sale * percent;
        console.log(commission.toFixed(2));
} else if (sale > 1000 && sale <= 10000) {
    percent = 0.10;
    commission = sale * percent;
    console.log(commission.toFixed(2));
} else if (sale > 10000) {
    percent = 0.13;
    commission = sale * percent;
    console.log(commission.toFixed(2));
} else {
    console.log("error");
}

} else if (town == "Plovdiv") {
    if (sale >= 0 && sale <= 500) {
        percent = 0.055;
        commission = sale * percent;
        console.log(commission.toFixed(2));
    } else if (sale > 500 && sale <= 1000) {
        percent = 0.08;
        commission = sale * percent;
        console.log(commission.toFixed(2));
} else if (sale > 1000 && sale <= 10000) {
    percent = 0.12;
    commission = sale * percent;
    console.log(commission.toFixed(2));
} else if (sale > 10000) {
    percent = 0.145;
    commission = sale * percent;
    console.log(commission.toFixed(2));
} else {
    console.log("error");
}

} else {
    console.log("error");
}



}

tradeCommissions(["Kaspichan", "-50"]);