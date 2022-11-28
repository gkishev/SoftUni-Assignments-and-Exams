function maidenParty (input) {

    let costParty = Number(input[0]);
    let loveWish = Number(input[1]);
    let rose = Number(input[2]);
    let keychain = Number(input[3]);
    let picture = Number(input[4]);
    let surpriseLuck = Number(input[5]);

    let priceLoveWish = loveWish * 0.60;
    let priceRose = rose * 7.20;
    let priceKeychain = keychain * 3.60;
    let pricePicture = picture * 18.20;
    let priceSurpriseLuck = surpriseLuck * 22;

    let totalSum = priceLoveWish + priceRose + priceKeychain + pricePicture + priceSurpriseLuck;
    let totalCount = loveWish + rose + keychain + picture + surpriseLuck;

    if (totalCount >= 25) {
        totalSum = totalSum * 0.65;
    }

    let sumAfterTax = totalSum * 0.90;

    if (sumAfterTax >= costParty) {
        console.log(`Yes! ${(sumAfterTax - costParty).toFixed(2)} lv left.`)
    } else if (sumAfterTax < costParty) {
        console.log(`Not enough money! ${(costParty - sumAfterTax).toFixed(2)} lv needed.`)
    }


}

maidenParty (["40.8",
"20",
"25",
"30",
"50",
"10"]
);