function vacation(count, type, day) {
  let price = 0;

  if (type === `Students`) {
    switch (day) {
      case `Friday`:
        price = count * 8.45;
        break;
      case `Saturday`:
        price = count * 9.8;
        break;
      case `Sunday`:
        price = count * 10.46;
        break;
    }
    if (count >= 30) {
      price = price * 0.85;
    }
  } else if (type === `Business`) {
    if (count >= 100) {
      count -= 10;
    }
    switch (day) {
      case `Friday`:
        price = count * 10.9;
        break;
      case `Saturday`:
        price = count * 15.6;
        break;
      case `Sunday`:
        price = count * 16;
        break;
    }
  } else if (type === `Regular`) {
    switch (day) {
      case `Friday`:
        price = count * 15;
        break;
      case `Saturday`:
        price = count * 20;
        break;
      case `Sunday`:
        price = count * 22.50;
        break;
    }
    if (count >= 10 && count <= 20) {
      price *= 0.95;
    }
  }

  console.log(`Total price: ${price.toFixed(2)}`);
}

vacation(
  40,

  'Regular',

  'Saturday'
);
