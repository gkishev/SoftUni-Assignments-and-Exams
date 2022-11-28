function outfit (input) {

    let temp = Number(input[0]);
    let timeOfDay = input[1];

    switch(timeOfDay) {
        case "Morning":
            if (temp >= 10 && temp <= 18) {
                let outfit = "Sweatshirt";
                let shoes = "Sneakers";
                console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
             } else if (temp > 18 && temp <=24) {
                let outfit = "Shirt";
                let shoes = "Moccasins";
                console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
             } else if (temp >=25) {
                let outfit = "T-Shirt";
                let shoes = "Sandals";
                console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
             }
             break;
        case "Afternoon":
            if (temp >= 10 && temp <= 18) {
                let outfit = "Shirt";
                let shoes = "Moccasins";
                console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
             } else if (temp > 18 && temp <=24) {
                let outfit = "T-Shirt";
                let shoes = "Sandals";
                console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
             } else if (temp >=25) {
                let outfit = "Swim Suit";
                let shoes = "Barefoot";
                console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
             }
             break;
        case "Evening":  
        if (temp >= 10 && temp <= 18) {
            let outfit = "Shirt";
            let shoes = "Moccasins";
            console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
         } else if (temp > 18 && temp <=24) {
            let outfit = "Shirt";
            let shoes = "Moccasins";
            console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
         } else if (temp >=25) {
            let outfit = "Shirt";
            let shoes = "Moccasins";
            console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`)
         }
         break;       
    }

}

outfit(["22",

"Afternoon"]);