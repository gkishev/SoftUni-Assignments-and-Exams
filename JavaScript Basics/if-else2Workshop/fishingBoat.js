function fishingBoat(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let fishermen = Number(input[2]);

  let price = 0;

  switch (season) {
    case 'Spring':
      if (fishermen <= 6) {
        price = 3000 * 0.9;
      } else if (fishermen > 6 && fishermen <= 11) {
        price = 3000 * 0.85;
      } else if (fishermen > 11) {
        price = 3000 * 0.75;
      }
      break;
    case 'Summer':
      if (fishermen <= 6) {
        price = 4200 * 0.9;
      } else if (fishermen > 6 && fishermen <= 11) {
        price = 4200 * 0.85;
      } else if (fishermen > 11) {
        price = 4200 * 0.75;
      }
      break;
    case 'Autumn':
      if (fishermen <= 6) {
        price = 4200 * 0.9;
      } else if (fishermen > 6 && fishermen <= 11) {
        price = 4200 * 0.85;
      } else if (fishermen > 11) {
        price = 4200 * 0.75;
      }
      break;
    case 'Winter':
      if (fishermen <= 6) {
        price = 2600 * 0.9;
      } else if (fishermen > 6 && fishermen <= 11) {
        price = 2600 * 0.85;
      } else if (fishermen > 11) {
        price = 2600 * 0.75;
      }
      break;
  }

  if (fishermen % 2 == 0 && season !== "Autumn") {
    price = price * 0.95;
  }

  if (budget >= price) {
    let diff = budget - price;
    console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
  } else if (price > budget) {
    let diff = price - budget;
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
  }
}

fishingBoat(["3600",

"Autumn",

"6"]);
