function spiceMustFlow(startingYield) {
  let daysMinned = 0;

  let storedSpice = 0;
  let workersConsumption = 26;

  while (startingYield >= 100) {
    daysMinned++;
    storedSpice += startingYield;
    startingYield -= 10;
    storedSpice -= workersConsumption;
    if (startingYield < 100) {
      storedSpice -= workersConsumption;
    }
  }
  console.log(daysMinned);
  console.log(storedSpice);
}

spiceMustFlow(450);
