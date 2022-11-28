function smartLily (input) {

    let lilysAge = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let toysCounter = 0;
    let savedMoney = 0;
    let stolenMoney = 0;
    let addMoney = 10;

    for (let currentAge = 1; currentAge <= lilysAge; currentAge++) {
        if (currentAge % 2 === 0) {
            savedMoney += addMoney;
            addMoney += 10;
            stolenMoney ++;
        } else {
            toysCounter ++;
        }

    }
    let totalSavings = (savedMoney + (toysCounter * toyPrice)) - stolenMoney;

    if (totalSavings >= washingMachinePrice) {
        console.log(`Yes! ${(totalSavings - washingMachinePrice).toFixed(2)}`);
    } else if (totalSavings < washingMachinePrice) {
        console.log(`No! ${(washingMachinePrice - totalSavings).toFixed(2)}`);
    }
}

smartLily(["10",

"170.00",

"6"]);