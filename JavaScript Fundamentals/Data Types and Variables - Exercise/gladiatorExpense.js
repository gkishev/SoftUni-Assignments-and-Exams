function gladiatorExpanses(
  lostFights,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
    let expansesTotal = 0;
    let breaksCount = 0;
    let sheildBreaks = 0;

    for(let i = 1; i <= lostFights; i++) {
        breaksCount++;
        if (breaksCount % 2 === 0) {
            expansesTotal += helmetPrice;
        }
        if (breaksCount % 3 === 0) {
            expansesTotal += swordPrice;
        }
        if (breaksCount % 6 === 0) {
            expansesTotal += shieldPrice;
            sheildBreaks++;
            if (sheildBreaks % 2 === 0) {
                expansesTotal += armorPrice;
            }
        }
    }
    console.log(`Gladiator expenses: ${(expansesTotal).toFixed(2)} aureus`);
}

gladiatorExpanses(
  7,

  2,

  3,

  4,

  5
);
