function hotelRoom (input) {

    let month = input[0];
    let nights = Number(input[1]);
    let studioPrice = 0;
    let apartmentPrice = 0;

    switch(month) {
        case "May":
        case "October":
            studioPrice = 50 * nights;
            apartmentPrice = 65 * nights;
            if (nights > 14) {
                studioPrice = studioPrice * 0.70;
                apartmentPrice = apartmentPrice * 0.90;
            } else if (nights > 7) {
                studioPrice = studioPrice * 0.95;
            }
            break;
        case "June":
        case "September":
            studioPrice = 75.20 * nights;
            apartmentPrice = 68.70 * nights;
            if (nights > 14) {
                studioPrice = studioPrice * 0.80;
                apartmentPrice = apartmentPrice * 0.90;
            }
            break;
        case "July":
        case "August":
            studioPrice = 76 * nights;
            apartmentPrice = 77 * nights;
            if (nights > 14) {
                apartmentPrice = apartmentPrice * 0.90;
            }
            break;
    }
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.
Studio: ${studioPrice.toFixed(2)} lv.`);


}

hotelRoom(["June",

"14"]);