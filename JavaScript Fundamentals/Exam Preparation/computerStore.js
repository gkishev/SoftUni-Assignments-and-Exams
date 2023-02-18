function computerStore(input) {
  let totalPrice = 0;

  let index = 0;
  let command = input[index];

  if (command === "special" || command === "regular") {
    return console.log('Invalid order!')}

  while (command !== 'special' && command !== 'regular') {
    let currentPrice = Number(input[index]);
    if (currentPrice <= 0) {
      console.log('Invalid price!');
    } else if (currentPrice > 0) {
      totalPrice += currentPrice;
    }
    index++;
    command = input[index];
  }
  
  let totalTaxes = totalPrice * 0.2;
  let priceWithTaxes = totalPrice + totalTaxes;

  if (priceWithTaxes <= 0) {
    console.log('Invalid order!');
  } else if (command === 'special') {
    priceWithTaxes = priceWithTaxes * 0.9;
  }
  console.log("Congratulations you've just bought a new computer!");
  console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`);
  console.log(`Taxes: ${totalTaxes.toFixed(2)}$`);
  console.log(`-----------`);
  console.log(`Total price: ${priceWithTaxes.toFixed(2)}$`);
}

computerStore(['regular'
]);
