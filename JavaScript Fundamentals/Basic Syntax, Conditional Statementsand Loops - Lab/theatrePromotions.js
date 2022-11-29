function theatrePromotions(day, age) {
  let ticketPrice = 0;

  switch (day) {
    case `Weekday`:
      if (0 <= age && age <= 18) {
        ticketPrice = 12;
      } else if (18 < age && age <= 64) {
        ticketPrice = 18;
      } else if (64 < age && age <= 122) {
        ticketPrice = 12;
      } else {
        console.log(`Error!`);
      }
      break;
    case `Weekend`:
      if (0 <= age && age <= 18) {
        ticketPrice = 15;
      } else if (18 < age && age <= 64) {
        ticketPrice = 20;
      } else if (64 < age && age <= 122) {
        ticketPrice = 15;
      } else {
        console.log(`Error!`);
      }
      break;
    case `Holiday`:
      if (0 <= age && age <= 18) {
        ticketPrice = 5;
      } else if (18 < age && age <= 64) {
        ticketPrice = 12;
      } else if (64 < age && age <= 122) {
        ticketPrice = 10;
      } else {
        console.log(`Error!`);
      }
      break;
  }
  if (ticketPrice !== 0) {
    console.log(ticketPrice + `$`);
  }
}

theatrePromotions('Weekday', 42);
