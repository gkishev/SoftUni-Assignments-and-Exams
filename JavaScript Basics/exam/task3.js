function courierExpress (input) {

    let weight = Number(input[0]);
    let typeOfDelivery = input[1];
    let distance = Number(input[2]);

    let totalPrice = 0;

    if (typeOfDelivery === `standard`) {
        if (weight < 1) {
            totalPrice = distance * 0.03;
        } else if (weight >= 1 && weight < 10) {
            totalPrice = distance * 0.05
        } else if (weight >= 10 && weight < 40) {
            totalPrice = distance * 0.10
        } else if (weight >= 40 && weight < 90) {
            totalPrice = distance * 0.15
        } else if (weight >= 90 && weight < 150) {
            totalPrice = distance * 0.20
        }
    } else if (typeOfDelivery === `express`) {
        if (weight < 1) {
            totalPrice = (distance * 0.03) +  (distance * (((0.03 * 0.8) * weight)))
        } else if (weight >= 1 && weight < 10) {
            totalPrice = (distance * 0.05) + (distance * (((0.05 * 0.4) * weight)))
        } else if (weight >= 10 && weight < 40) {
            totalPrice = (distance * 0.10) + (distance * (((0.10 * 0.05) * weight)))
        } else if (weight >= 40 && weight < 90) {
            totalPrice = (distance * 0.15) + (distance * (((0.15 * 0.02) * weight)))
        } else if (weight >= 90 && weight < 150) {
            totalPrice = (distance * 0.20) + (distance * (((0.20 * 0.01) * weight)))
        }
    
    }

    console.log(`The delivery of your shipment with weight of ${(weight).toFixed(3)} kg. would cost ${(totalPrice).toFixed(2)} lv.`)

}

courierExpress (["87",
"express",
"130"]
);