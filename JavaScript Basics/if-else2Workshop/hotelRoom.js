function hotelRoom(input) {
  let month = input[0];
  let nights = Number(input[1]);
  let studioPrice = 0;
  let apartmentPrice = 0;

  switch (month) {
    case 'May':
      if (nights > 7 && nights <= 14) {
        studioPrice = 50 * nights * 0.95;
        apartmentPrice = 65 * nights;
      } else if (nights > 14) {
        studioPrice = 50 * nights * 0.7;
        apartmentPrice = 65 * nights * 0.9;
      }
      console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.
Studio: ${studioPrice.toFixed(2)} lv.`);
      break;
    case 'October':
      if (nights > 7 && nights <= 14) {
        studioPrice = 50 * nights * 0.95;
        apartmentPrice = 65 * nights;
      } else if (nights > 14) {
        studioPrice = 50 * nights * 0.7;
        apartmentPrice = 65 * nights * 0.9;
      }
      console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.
Studio: ${studioPrice.toFixed(2)} lv.`);
      break;
    case 'June':
      if (nights > 7 && nights <= 14) {
        studioPrice = 75.2 * nights;
        apartmentPrice = 68.7 * nights;
      } else if (nights > 14) {
        studioPrice = 75.2 * nights * 0.8;
        apartmentPrice = 68.7 * nights * 0.9;
      }
      console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.
Studio: ${studioPrice.toFixed(2)} lv.`);
      break;
    case 'September':
      if (nights > 7 && nights <= 14) {
        studioPrice = 75.2 * nights;
        apartmentPrice = 68.7 * nights;
      } else if (nights > 14) {
        studioPrice = 75.2 * nights * 0.8;
        apartmentPrice = 68.7 * nights * 0.9;
      }
      console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.
Studio: ${studioPrice.toFixed(2)} lv.`);
      break;
    case 'July':
      if (nights > 7 && nights <= 14) {
        studioPrice = 76 * nights;
        apartmentPrice = 77 * nights;
      } else if (nights > 14) {
        studioPrice = 76 * nights;
        apartmentPrice = 77 * nights * 0.9;
      }
      console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.
Studio: ${studioPrice.toFixed(2)} lv.`);
      break;
    case 'August':
      if (nights > 7 && nights <= 14) {
        studioPrice = 76 * nights;
        apartmentPrice = 77 * nights;
      } else if (nights > 14) {
        studioPrice = 76 * nights;
        apartmentPrice = 77 * nights * 0.9;
      }
      console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
      break;
  }
}

hotelRoom(['August', '20']);
